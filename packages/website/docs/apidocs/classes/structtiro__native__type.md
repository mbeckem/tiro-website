---
title: tiro_native_type
summary: Describes a native object type to the tiro runtime. 

---

# tiro_native_type



Describes a native object type to the tiro runtime.  [More...](#detailed-description)


`#include "tiro/objects.h"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const char &#42; | **[name](/docs/api/classes/structtiro__native__type#variable-name)** <br>The human readable name of this type, mainly for debugging.  |
| void(&#42;)(void &#42;data, size&#95;t size) | **[finalizer](/docs/api/classes/structtiro__native__type#variable-finalizer)** <br>This function will be invoked exactly once for each object when it is being garbage collected.  |

## Detailed Description

```cpp
struct tiro_native_type;
```

Describes a native object type to the tiro runtime. 

**Todo**: DRAFT API. Will probably be replaced with native user defined types.

**Warning**: The native type instance must not be changed while it is being referenced by native objects! 

Instances of this type must be provided to the API when constructing a new native object.

Native objects that are created with a certain type will continue refencing that type instance by its address. The lifetime of `tiro_native_type_t` instances is not managed by the runtime, they must remain valid for as long as there are native objects referring to them.

## Public Attributes Documentation

### variable name

```cpp
const char * name;
```

The human readable name of this type, mainly for debugging. 

Must be a valid zero terminated string. 


### variable finalizer

```cpp
void(*)(void *data, size_t size) finalizer;
```

This function will be invoked exactly once for each object when it is being garbage collected. 

**Parameters**: 

  * **data** The address to the native object's data. Any resourced owned by `data` should be freed. 
  * **size** The size of the native object, in bytes. 


It may be NULL if no finalization is needed.


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100