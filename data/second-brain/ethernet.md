# Ethernet

- Most important [[data link layer]] standard
- Capable of running on variety of network media
- Offers excellent throughput at reasonable cost
- Most popular network tech used on modern LANs
- Ethernet II is current standard
- Adds both header and trailer to payload
  - Creates frame around payload
  - Header and FCS make up 18 byte "frame" around data
- Data portion of an Ethernet frame may contain 46 - 1500 bytes
- MTU
  - Maximum transmission unit
  - Largest size that [[router]]s in a message's path will allow at [[network layer]]
- Exceptions on Ethernet frame size limitations:
  - On a [[VLAN]] can have an extra 4 byte field between source address field and type field
  - Some special purpose networks use proprietary version of Ethernet allowing for a jumbo frame
    - MTU can be as high as 9198 bytes (depends on Ethernet architecture used)

[[Networking]] [[Computer Science]]

