# VLAN

- Virtual [[LAN]]
- Groups ports on a [[network switch]]
  - Some of the local traffic is forced to go through a router
- Limiting traffic to smaller broadcast domains
- Uses
  - Isolating connections with heavy or unpredictable traffic patterns
  - Identifying groups of devices whose data should be given priority handling
  - Containing groups of devices that rely on legacy protocols incompatible with the majority of the network's traffic
  - Separating groups of users who need special security or network functions
  - Configuring temporary networks
  - Reducing the cost of networking equipment

## Types

- Default VLAN
  - Preconfigured on a switch
  - Initially includes all switch ports
- Native VLAN
  - Receives all untagged frames from untagged ports
- Data VLAN
  - Carries user-generated traffic
    - E.g. email, web browsing, or DB updates
- Management VLAN
  - Can be used to provide admin access to a switch
- Voice VLAN
  - Supports [[VoIP]] traffic

## VLAN Hopping

- Occurs when an attacker generates transmissions that appear to belong to protected VLAN
- Crosses VLANs to access sensitive data or inject harmful software
- Two approaches:
  - Double tacking
    - Hacker stacks VLAN tags in [[Ethernet]] frames
    - Legitimate tag is removed by [[network switch]]
    - Illegitimate tag is revealed, tricking the switch into forwarding transmission onto a restricted VLAN
  - Switch spoofing
    - Attack connects to a [[network switch]] and makes the connection look as if it's a trunk line
    - Hacker can feed his own VLAN traffic into that port and access VLANs throughout the network

### Mitigation

- Don't use the default VLAN
- Change native VLAN to an unused VLAN ID
- Disable auto-trunking on [[network switches]] that don't need to support traffic from multiple VLANs
- Configure all ports as access ports unless they are used as trunk ports
- Specify which VLANs are supported on each trunk instead of accepting a range of all VLANs

## Troubleshooting

- Common config issues:
  - Incorrect port mode
    - Switch ports connected to endpoints should nearly always use access mode
  - Incorrect VLAN assignment
  - VLAN isolation
    - Can potentially cut off an entire group from the rest of the network

[[Networking]] [[Computer Science]]

