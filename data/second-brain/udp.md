# UDP (User Datagram Protocol)

![UDP datagram](/assets/second-brain/2020-09-29-17-34-36.png)

- Unreliable, connectionless
  - No three-way-handshake
  - No guaranteed delivery of data
- Provides no error checking, sequencing, or flow control
  - More efficient than TCP
- Useful for live audio or video
- More efficient for carrying messages that fit within one packet
- Header only contains four fields
  - Source port
  - Destination port
  - Length
  - Checksum
    - Optional in IPv4, required in IPv6

[[Networking]] [[Computer Science]] [[TCP-IP]]

