# Use a script to install and configure Beats
Beats is the platform for single-purpose data shippers. They send data from your machines and systems to Elasticsearch, which can be then be seen in Kibana with built-in dashboards and visualizations. Each Beat type also has a set of modules that provide additional functionality and can be enabled easily.

### Filebeat
Enter the following into your console along with the url given to you when you created your Vizion ELK app.
```curl ec2-54-184-247-238.us-west-2.compute.amazonaws.com/install-config-metricbeat.sh > install-config-metricbeat.sh; chmod a+x install-config-metricbeat.sh; ./install-config-metricbeat.sh << your Vizion ELK url here >>```


### Metricbeat

### Auditbeat

### Heartbeat

### Packetbeat
