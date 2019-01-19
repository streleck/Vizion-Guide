# Using scripts to quickly install and configure Beats
Beats is the platform for single-purpose data shippers. They send data from your machines and systems to Elasticsearch, which can be then be seen in Kibana with built-in dashboards and visualizations. Each Beat type also has a set of modules that provide additional functionality and can be enabled easily.

## Filebeat
Filebeat is a lightweight shipper for log data, that will automatically crawl your log files and send log data to your Vizion Elk app. [more](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-overview.html)

To install and configure Filebeat, enter the following into your console along with the url given to you when you created your Vizion ELK app.

    curl ec2-54-184-247-238.us-west-2.compute.amazonaws.com/install-config-metricbeat.sh > install-config-metricbeat.sh; chmod a+x    install-config-metricbeat.sh; ./install-config-metricbeat.sh << your Vizion ELK url here >>

To enable a module, enter `filebeat modules enable << module name >>` or `./filebeat modules enable << module name >>`

Modules available: *Apache2, Auditd, Elasticsearch, haproxy, Icinga, IIS, Kafka, Kibana, Logstash, MongoDB, MySQL, Nginx, Osquery, PostgreSQL, Redis, Suricata, System, Traefik*

[More on Filebeat modules](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules-overview.html)

**You should now be sending data to your Vizion ELK app. View it in [Kibana](https://app.vizion.ai/app/kibana)**

For debugging, you can view your Filebeat error logs at `/var/log/filebeat/filebeat` or change the configuration at `/etc/filebeat/filebeat.yml`.


## Metricbeat
Metricbeat is a lightweight shipper for metric data, that will send system data and metrics to your Vizion Elk app. [more](https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-overview.html)

To install and configure Metricbeat, enter the following into your console along with the url given to you when you created your Vizion ELK app.

    curl ec2-54-184-247-238.us-west-2.compute.amazonaws.com/install-config-metricbeat.sh > install-config-metricbeat.sh; chmod a+x    install-config-metricbeat.sh; ./install-config-metricbeat.sh << your Vizion ELK url here >>

To enable a module, enter `metricbeat modules enable << module name >>` or `./metricbeat modules enable << module name >>`

Modules available: *Aerospike, Apache, Ceph, Couchbase, Docker, Dropwizard, Elasticsearch, envoyproxy, Etcd, Golang, Graphite, HAProxy, HTTP, Jolokia, Kafka, Kibana, Kubernetes, kvm, Logstash, Memcached, MongoDB, Munin, MySQL, Nginx, PHP_FPM, PostgreSQL, Prometheus, RabbitMQ, Redis, System, traefik, uwsgi, vSphere, Windows, ZooKeeper*

[More on Metricbeat modules](https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-modules.html)

**You should now be sending data to your Vizion ELK app. View it in [Kibana](https://app.vizion.ai/app/kibana)**

For debugging, you can view your Metricbeat error logs at `/var/log/metricbeat/metricbeat` or change the configuration at `/etc/metricbeat/metricbeat.yml`.



## Auditbeat
Auditbeat is a lightweight shipper that you can install on your servers to audit the activities of users and processes on your systems and send the data to your Vizion Elk app. [more](https://www.elastic.co/guide/en/beats/auditbeat/current/auditbeat-overview.html)

To install and configure Auditbeat, enter the following into your console along with the url given to you when you created your Vizion ELK app.

    curl ec2-54-184-247-238.us-west-2.compute.amazonaws.com/install-config-metricbeat.sh > install-config-metricbeat.sh; chmod a+x    install-config-metricbeat.sh; ./install-config-metricbeat.sh << your Vizion ELK url here >>

Auditbeat comes with two modules already running - Auditd and File Integrity. File integrity tracks changes to files within specified directories. You can change which directories will be tracked (beyond the defaults) in the Auditbeat config file: `/etc/auditbeat/auditbeat.yml`. Auditd rules are specified in their own files in the folder `/etc/auditbeat/audit.rules.d`.

[More on Auditbeat modules](https://www.elastic.co/guide/en/beats/auditbeat/current/auditbeat-modules.html)
<a href="https://www.elastic.co/guide/en/beats/auditbeat/current/auditbeat-modules.html" target="_blank">huzz</a>

**You should now be sending data to your Vizion ELK app. View it in [Kibana](https://app.vizion.ai/app/kibana)**

For debugging, you can view your Auditbeat error logs at `/var/log/auditbeat/auditbeat` or change the configuration at `/etc/auditbeat/auditbeat.yml`.

### Heartbeat

### Packetbeat
