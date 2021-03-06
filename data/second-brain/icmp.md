# ICMP (Internet Control Message Protocol)

![ICMP packet](/assets/second-brain/2020-09-29-17-43-43.png)

- [[Network layer]] core protocol
- Reports on success/failure of data delivery
- Can indicate:
  - When part of a network is congested
  - When data fails to reach its destination
  - When data has been discarded because TTL has expired
- Announces transmission failures to sender
  - Does not correct detected errors
- Provides critical information for troubleshooting network problems
- ICMPv6 on [[IP]]v6 networks perform the functions of ICMP and [[ARP]] on [[IP]]v4 networks

## Packet

| Field          | Length   | Function                                                                                                      |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Type           | 8 bits   | Indicate type of ICMP message                                                                                 |
| Code           | 8 bits   | Indicates subtype of message                                                                                  |
| Checksum       | 16 bits  | Allows receiving node to determine if packet became corrupted during transmission                             |
| Rest of header | 32 bits  | Varies depending on type/subtype                                                                              |
| Data           | Variable | Usually contains [[IP]] header and first 8 bytes of data portion of [[IP]] packet that triggered ICMP message |

[[Networking]] [[Computer Science]]

