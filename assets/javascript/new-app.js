var majorStepTitles = document.getElementsByClassName('major-step-title');
var copyYmlButton = document.getElementById('copy-yml');

for(let title of majorStepTitles){
  title.addEventListener('click', function(event) {
    // Check if the section is collapsed or open, then toggle them
    if (event.target.classList.contains('collapsed')) {
      event.target.classList.remove('collapsed');
      event.target.classList.add('open');
      event.target.nextElementSibling.style.setProperty('display', 'block');
    }
    else {
      event.target.classList.remove('open');
      event.target.classList.add('collapsed');
      event.target.nextElementSibling.style.setProperty('display', 'none');
    }      
  })
}

copyYmlButton.addEventListener('click', function(){
  let vizionElasticUrl = document.getElementById('vizion-elastic-url');
  let url = vizionElasticUrl.value.split('//');
  let username = url[1].split(':')[0];
  url = url[1].split(':')[1];
  let password = url.split('@')[0];
  url = url.split('@')[1];
  let vizionEsAppId = url.split('.')[0];
  let ymlText = `###################### Filebeat Configuration Example #########################

  # This file is an example configuration file highlighting only the most common
  # options. The filebeat.reference.yml file from the same directory contains all the
  # supported options with more comments. You can use it as a reference.
  #
  # You can find the full configuration reference here:
  # https://www.elastic.co/guide/en/beats/filebeat/index.html
  
  # For more available modules and options, please see the filebeat.reference.yml sample
  # configuration file.
  
  #=========================== Filebeat inputs =============================
  
  filebeat.inputs:
  
  # Each - is an input. Most options can be set at the input level, so
  # you can use different inputs for various configurations.
  # Below are the input specific configurations.
  
  - type: log
  
    # Change to true to enable this input configuration.
    enabled: true
  
    # Paths that should be crawled and fetched. Glob based paths.
    paths:
      - /var/log/*.log
      - /var/log/*/*.log
      #- c:\\programdata\\elasticsearch\\logs\\*
  
    # Exclude lines. A list of regular expressions to match. It drops the lines that are
    # matching any regular expression from the list.
    #exclude_lines: ['^DBG']
  
    # Include lines. A list of regular expressions to match. It exports the lines that are
    # matching any regular expression from the list.
    #include_lines: ['^ERR', '^WARN']
  
    # Exclude files. A list of regular expressions to match. Filebeat drops the files that
    # are matching any regular expression from the list. By default, no files are dropped.
    #exclude_files: ['.gz$']
  
    # Optional additional fields. These fields can be freely picked
    # to add additional information to the crawled log files for filtering
    #fields:
    #  level: debug
    #  review: 1
  
    ### Multiline options
  
    # Mutiline can be used for log messages spanning multiple lines. This is common
    # for Java Stack Traces or C-Line Continuation
  
    # The regexp Pattern that has to be matched. The example pattern matches all lines starting with [
    #multiline.pattern: ^\\[
  
    # Defines if the pattern set under pattern should be negated or not. Default is false.
    #multiline.negate: false
  
    # Match can be set to "after" or "before". It is used to define if lines should be append to a pattern
    # that was (not) matched before or after or as long as a pattern is not matched based on negate.
    # Note: After is the equivalent to previous and before is the equivalent to to next in Logstash
    #multiline.match: after
   # multiline.timeout: 60s
  
  
  #============================= Filebeat modules ===============================
  
  filebeat.config.modules:
    # Glob pattern for configuration loading
    path: \${path.config}/modules.d/*.yml
  
    # Set to true to enable config reloading
    reload.enabled: false
  
    # Period on which files under path should be checked for changes
    #reload.period: 10s
  
  #==================== Elasticsearch template setting ==========================
  
  setup.template.settings:
    #index.number_of_shards: 3
    #index.codec: best_compression
    #_source.enabled: false
  
  #================================ General =====================================
  
  # The name of the shipper that publishes the network data. It can be used to group
  # all the transactions sent by a single shipper in the web interface.
  #name:
  
  # The tags of the shipper are included in their own field with each
  # transaction published.
  #tags: ["service-X", "web-tier"]
  
  # Optional fields that you can specify to add additional information to the
  # output.
  #fields:
  #  env: staging
  
  
  #============================== Dashboards =====================================
  # These settings control loading the sample dashboards to the Kibana index. Loading
  # the dashboards is disabled by default and can be enabled either by setting the
  # options here, or by using the \`-setup\` CLI flag or the \`setup\` command.
  #setup.dashboards.enabled: false
  
  # The URL from where to download the dashboards archive. By default this URL
  # has a value which is computed based on the Beat name and version. For released
  # versions, this URL points to the dashboard archive on the artifacts.elastic.co
  # website.
  #setup.dashboards.url:
  
  #============================== Kibana =====================================
  
  # Starting with Beats version 6.0.0, the dashboards are loaded via the Kibana API.
  # This requires a Kibana endpoint configuration.
  setup.kibana:
  
    # Kibana Host
    # Scheme and port can be left out and will be set to the default (http and 5601)
    # In case you specify and additional path, the scheme is required: http://localhost:5601/path
    # IPv6 addresses should always be defined as: https://[2001:db8::1]:5601
    #host: "localhost:5601"
  
  #============================= Elastic Cloud ==================================
  
  # These settings simplify using filebeat with the Elastic Cloud (https://cloud.elastic.co/).
  
  # The cloud.id setting overwrites the \`output.elasticsearch.hosts\` and
  # \`setup.kibana.host\` options.
  # You can find the \`cloud.id\` in the Elastic Cloud web UI.
  #cloud.id:
  
  # The cloud.auth setting overwrites the \`output.elasticsearch.username\` and
  # \`output.elasticsearch.password\` settings. The format is \`<user>:<pass>\`.
  #cloud.auth:
  
  #================================ Outputs =====================================
  
  # Configure what output to use when sending the data collected by the beat.
  
  #-------------------------- Elasticsearch output ------------------------------
  output.elasticsearch:
    # Array of hosts to connect to.
    hosts: ["${vizionElasticUrl.value + ':443'}"]  
    username: "${username}"
    password: "${password}"
    ssl.verification_mode: none
    headers:
      vizion-es-app-id: ${vizionEsAppId}
    timeout: 500
    setup.template:
     name: "api-access1"
     pattern: "api-access1-*"
     overwrite: true 
  #----------------------------- Logstash output --------------------------------
  #output.logstash:
    # The Logstash hosts
    #hosts: ["localhost:5044"]
  
    # Optional SSL. By default is off.
    # List of root certificates for HTTPS server verifications
    #ssl.certificate_authorities: ["/etc/pki/root/ca.pem"]
  
    # Certificate for SSL client authentication
    #ssl.certificate: "/etc/pki/client/cert.pem"
  
    # Client Certificate Key
    #ssl.key: "/etc/pki/client/cert.key"
  
  #================================ Logging =====================================
  
  # Sets log level. The default log level is info.
  # Available log levels are: error, warning, info, debug
  #logging.level: debug
  
  # At debug level, you can selectively enable logging only for some components.
  # To enable all selectors use ["*"]. Examples of other selectors are "beat",
  # "publish", "service".
  #logging.selectors: ["*"]
  
  #============================== Xpack Monitoring ===============================
  # filebeat can export internal metrics to a central Elasticsearch monitoring
  # cluster.  This requires xpack monitoring to be enabled in Elasticsearch.  The
  # reporting is disabled by default.
  
  # Set to true to enable the monitoring reporter.
  #xpack.monitoring.enabled: false
  
  # Uncomment to send the metrics to Elasticsearch. Most settings from the
  # Elasticsearch output are accepted here as well. Any setting that is not set is
  # automatically inherited from the Elasticsearch output configuration, so if you
  # have the Elasticsearch output configured, you can simply uncomment the
  # following line. 
  #xpack.monitoring.elasticsearch:`
  
  let hiddenTextArea = `<textarea id="hidden-text" value="${ymlText}"></textarea>`
  let hiddenPlace = document.getElementById('hiddenPlace');
  hiddenPlace.append(hiddenTextArea);
  hiddenTextArea.select();
  Document.execCommand('copy');
  hiddenPlace.remove();
})