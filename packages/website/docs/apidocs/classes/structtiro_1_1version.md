---
title: tiro::version
summary: Represents a library version. 

---

# tiro::version



Represents a library version. 


`#include "tiropp/version.hpp"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint32&#95;t | **[version_number](/docs/api/classes/structtiro_1_1version#variable-version-number)** <br>The full version number (see TIRO_MAKE_VERSION).  |
| uint32&#95;t | **[major](/docs/api/classes/structtiro_1_1version#variable-major)** <br>The major version extracted from the version number.  |
| uint32&#95;t | **[minor](/docs/api/classes/structtiro_1_1version#variable-minor)** <br>The minor version extracted from the version number.  |
| uint32&#95;t | **[patch](/docs/api/classes/structtiro_1_1version#variable-patch)** <br>The patch version extracted from the version number.  |
| const char &#42; | **[version](/docs/api/classes/structtiro_1_1version#variable-version)** <br>The library's version as a string.  |
| const char &#42; | **[source_id](/docs/api/classes/structtiro_1_1version#variable-source-id)** <br>The library's source id (build system identifier).  |
| const char &#42; | **[full_version](/docs/api/classes/structtiro_1_1version#variable-full-version)** <br>The library's full version as a string.  |

## Public Attributes Documentation

### variable version_number

```cpp
uint32_t version_number = 0;
```

The full version number (see TIRO_MAKE_VERSION). 

### variable major

```cpp
uint32_t major = 0;
```

The major version extracted from the version number. 

### variable minor

```cpp
uint32_t minor = 0;
```

The minor version extracted from the version number. 

### variable patch

```cpp
uint32_t patch = 0;
```

The patch version extracted from the version number. 

### variable version

```cpp
const char * version = "";
```

The library's version as a string. 

Points into static storage if this object was returned by this libray. 


### variable source_id

```cpp
const char * source_id = "";
```

The library's source id (build system identifier). 

Points into static storage if this object was returned by this libray. 


### variable full_version

```cpp
const char * full_version = "";
```

The library's full version as a string. 

Points into static storage if this object was returned by this libray. 


-------------------------------

Updated on 2022-01-01 at 12:38:40 +0100