# Install Beats Manually
Beats is the platform for single-purpose data shippers. They send data from your machines and systems to Elasticsearch, which can be then be seen in Kibana with built-in dashboards and visualizations. Each Beat type also has a set of modules that provide additional functionality and can be enabled easily.

## Download your beat
* [Filebeat](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation.html) - a lightweight shipper for log data, that will automatically crawl your log files and send log data to your Vizion Elk app.
* [Metricbeat](https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-installation.html) - a lightweight shipper for metric data, that will send system data and metrics to your Vizion Elk app.
* [Auditbeat](https://www.elastic.co/guide/en/beats/auditbeat/current/auditbeat-installation.html) - a lightweight shipper that you can install on your servers to audit the activities of users and processes on your systems and send the data to your Vizion Elk app.
* [Heartbeat](https://www.elastic.co/guide/en/beats/heartbeat/current/heartbeat-installation.html) - a lightweight daemon that you install on a remote server to periodically check the status of your services and determine whether they are available. 
* [Packetbeat](https://www.elastic.co/guide/en/beats/packetbeat/current/packetbeat-installation.html) - a real-time network packet analyzer that you can use with your Vizion ELK app to provide an application monitoring and performance analytics system. 

## Configure your beat to connect to Vizion ELK

Your beat is configured with a YAML file, located at `/etc/<beatname>/<beatname>.yml` and comes set with sensible defaults. The main thing to configure is the connection to your Vizion ELK app and to Kibana (to install dashboards). To do this, you will need to separate your Vizion Elk url into components to get your username, password, and app id.

![graph on parsing vizion ELK URL](./assets/images/app-credentials-split.png)


````#============================== Kibana =====================================

# Starting with Beats version 6.0.0, the dashboards are loaded via the Kibana API.
# This requires a Kibana endpoint configuration.
setup.kibana:

  # Kibana Host
  # Scheme and port can be left out and will be set to the default (http and 5601)
  # In case you specify and additional path, the scheme is required: http://localhost:5601/path
  # IPv6 addresses should always be defined as: https://[2001:db8::1]:5601
  host: "https://app.vizion.ai:443"
  protocol: "https"
  username: "e33d2ea501994214"
  password: "b4b699b082a2f685"
````

