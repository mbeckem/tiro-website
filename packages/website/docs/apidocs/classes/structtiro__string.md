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
| const char &#42; | **[data](/docs/api/classes/structtiro__string#variable-data)** <br>string data, utf8 encoded.  |
| size&#95;t | **[length](/docs/api/classes/structtiro__string#variable-length)** <br>number of bytes in `data`.  |

## Detailed Description

```cpp
struct tiro_string;
```

Represents a string that is not necessarily zero terminated. 

`data` must have `length` readable bytes. `data` is allowed to be NULL (or any other invalid pointer) if and only if `length` is 0. 

## Public Attributes Documentation

### variable data

```cpp
const char * data;
```

string data, utf8 encoded. 

### variable length

```cpp
size_t length;
```

number of bytes in `data`. 

-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100