# Sharding

- Sometimes called data partitioning
- Splitting a [[database]] into two or more pieces called **shards**
- Typically done to increase throughput of your database

## Strategies

- Based on client's region
- Based on the type of data being stored
  - E.g. user data gets stored in one shard, payments data on another, etc.
- Based on the hash of a column
  - Only for structured data

[[Computer Science]] [[System Design]] [[Database]]

