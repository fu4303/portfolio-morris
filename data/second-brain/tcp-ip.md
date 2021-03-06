# TCP/IP

- [[TCP]] (Transmission Control Protocol)
- [[IP]] (Internet Protocol)
- [[TCP]]/[[IP]] suite is used by OSes for communication on a network
- [[TCP]] rests on top of the [[IP]] foundation

## Core Protocols

- Full suite of protocols including:
  - [[TCP]], [[IP]], [[UDP]], ARP, and more
- Add header to data inherited from the layer above
  - ![Layers add own data and addresses](/assets/second-brain/2020-09-29-17-08-15.png)
  - Layer 7, 6, 5
    - Data and instructions are generated by apps running on source host
    - Known as payload
  - Layer 4
    - [[Transport layer]] protocol adds header to payload
    - Usually TCP or UDP
    - Includes port number to identify receiving app
  - Layer 3
    - [[Network layer]] adds its own header and becomes a packet
  - Layer 2
    - Packet passed to [[data link layer]] on NIC
    - Encapsulates data with its own header and trailer --> frame
  - Layer 1
    - [[Physical layer]] on NIC receives frame and places transmission on the network
- Receiving host de-encapsulates message at each layer and presents payload to receiving apps
  - Reverse order
  - In transit, transmissions might pass through number of connectivity devices
- Connectivity devices
  - Devices allowing two or more networks/parts of one network to connect and exchange data
  - Known by highest OSI they read and process
  - ![Connectivity devices](/assets/second-brain/2020-09-29-17-12-35.png)

[[Networking]] [[Computer Science]]

