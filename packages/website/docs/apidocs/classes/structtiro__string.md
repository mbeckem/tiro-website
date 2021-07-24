---
title: tiro_string
summary: Represents a string that is not necessarily zero terminated. 

---

# tiro_string



Represents a string that is not necessarily zero terminated.  [More...](#detailed-description)


`#include "tiro/def.h"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| size_t | **[length](/docs/api/classes/structtiro__string#variable-length)** <br>number of bytes in `data`.  |
| const char * | **[data](/docs/api/classes/structtiro__string#variable-data)** <br>string data, utf8 encoded.  |

## Detailed Description

```cpp
struct tiro_string;
```

Represents a string that is not necessarily zero terminated. 

`data` must have `length` readable bytes. `data` is allowed to be NULL (or any other invalid pointer) if and only if `length` is 0. 

## Public Attributes Documentation

### variable length

```cpp
size_t length;
```

number of bytes in `data`. 

### variable data

```cpp
const char * data;
```

string data, utf8 encoded. 

-------------------------------

Updated on 24 July 2021 at 15:38:22 CEST