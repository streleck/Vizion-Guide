# Use a script to install and configure Beats
Beats is the platform for single-purpose data shippers. They send data from your machines and systems to Elasticsearch, which can be then be seen in Kibana with built-in dashboards and visualizations. Each Beat type also has a set of modules that provide additional functionality and can be enabled easily.

## Filebeat
Enter the following into your console along with the url given to you when you created your Vizion ELK app.

    curl ec2-54-184-247-238.us-west-2.compute.amazonaws.com/install-config-metricbeat.sh > install-config-metricbeat.sh; chmod a+x    install-config-metricbeat.sh; ./install-config-metricbeat.sh << your Vizion ELK url here >>

To enable a module, enter `filebeat modules enable << module name >>` or `./filebeat modules enable << module name >>`

Modules available: *Apache2, Auditd, Elasticsearch, haproxy, Icinga, IIS, Kafka, Kibana, Logstash, MongoDB, MySQL, Nginx, Osquery, PostgreSQL, Redis, Suricata, System, Traefik*

[More on Filebeat modules](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules-overview.html)

**You should now be sending data to your Vizion ELK app. View it in [Kibana](https://app.vizion.ai/app/kibana)**

For debugging, you can view your Filebeat error logs at `/var/log/filebeat/filebeat` or change the configuration at `/etc/filebeat/filebeat.yml`.

## Metricbeat
Enter the following into your console along with the url given to you when you created your Vizion ELK app.

    curl ec2-54-184-247-238.us-west-2.compute.amazonaws.com/install-config-metricbeat.sh > install-config-metricbeat.sh; chmod a+x    install-config-metricbeat.sh; ./install-config-metricbeat.sh << your Vizion ELK url here >>

To enable a module, enter `metricbeat modules enable << module name >>` or `./metricbeat modules enable << module name >>`

Modules available: *Aerospike, Apache, Ceph, Couchbase, Docker, Dropwizard, Elasticsearch, envoyproxy, Etcd, Golang, Graphite, HAProxy, HTTP, Jolokia, Kafka, Kibana, Kubernetes, kvm, Logstash, Memcached, MongoDB, Munin, MySQL, Nginx, PHP_FPM, PostgreSQL, Prometheus, RabbitMQ, Redis, System, traefik, uwsgi, vSphere, Windows, ZooKeeper*

[More on Metricbeat modules](https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-modules.html)

**You should now be sending data to your Vizion ELK app. View it in [Kibana](https://app.vizion.ai/app/kibana)**

For debugging, you can view your Metricbeat error logs at `/var/log/metricbeat/metricbeat` or change the configuration at `/etc/metricbeat/metricbeat.yml`.

### Auditbeat

### Heartbeat

### Packetbeat
