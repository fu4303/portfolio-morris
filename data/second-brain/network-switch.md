# Network Switch

- Like an old-school switchboard
- Directs network traffic to/from various destinations (ports)****

## Managed Switches

![Example of a managed switch](/assets/second-brain/2020-11-06-11-46-04.png)

- Can be configured via CLI or GUI
- Usually assigned an [[IP address]]
- VLANs can only be implemented through manages switches
- Ports can be partitioned into groups
- Switch adds a tag to Ethernet frames to identify the port through which they arrive at the switch
  - Identifies the transmissions that belong to each VLAN
  - Tag travels with transmission until it reaches a router or switch port connected to destination device
    - Whichever comes first

## Switch Ports and Trunks

- Port is either configured as an access port or a trunk port
  - Access port
    - Used for connecting a single node
  - Trunk port
    - Capable of managing traffic among multiple VLANs
- Trunk
  - Single physical connection between switches
  - Many logical VLANs can transmit and receive data over

[[Networking]] [[Computer Science]]

