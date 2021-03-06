# IP (Internet Protocol)

- Operates at the [[network layer]]
  - Specifies where data should be delivered
  - Identifies the data's source and destination [[IP address]]es
- Enables [[TCP]]/IP to internetwork to traverse:
  - More than one [[LAN]] segment
  - More than one type of network through router
- Unreliable, connectionless
  - Does not guarantee delivery of data
  - No session established before data is transmitted
  - Depends on [[TCP]]:
    - To ensure messages are put back together in proper order
    - To ensure each message reaches the correct application on receiving host

## IP Packet

- The smallest unit used to describe data being sent over IP (aside from bytes)
- $2^{16}$ bytes
  - Not very large
- Consists of:
  - An IP header
    - The source and destination [[IP address]]es
    - Other information related to the [[network]]
  - A payload
    - Data being sent over the [[network]]

### IPv4 Packet

![IPv4 packet](/assets/second-brain/2020-09-29-17-40-14.png)

### IPv6 Packet

![IPv6 packet](/assets/second-brain/2020-09-29-17-40-40.png)

[[Networking]] [[Computer Science]] [[TCP-IP]]

