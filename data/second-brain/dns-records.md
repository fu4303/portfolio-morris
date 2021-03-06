# DNS Records

## A and AAAA

- Stores [[IP address]] for a name
- A --> IPv4
- AAAA --> IPv6

## CNAME (Alias)

- Alias record for another record
- Canonical name

## MX Record

- Mail exchange
- Identifies mail server for DNS name
- Has a priority associated with it
  - Lowest priority is tried first
  - Same priority --> random choice
- When a mail delivery fails, next highest priority is tried next

## SRV (Service Record)

- Location of a service on the network
- Contains:
  - Service (eg. LDAP)
  - Target
  - Port
  - Priority
- Usually created automatically

## SOA (Start of Authority)

- One per zone
- Primary name server for the zone
- Email of admin
- Serial number
- Refresh time for a zone

## NS (Name Server)

- Contains authority DNS servers for domain
- Can be DNS server with secondary zones
- Best source to answer queries
  - Do not contain cached data

## PTR (Pointer)

- Used for reverse DNS lookups
- Provides IP address --> name mapping
- Opposite of A or AAAA records

[[Computer Science]] [[DNS]] [[Networking]]

