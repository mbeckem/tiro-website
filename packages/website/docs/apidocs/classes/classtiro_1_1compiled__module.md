---
title: tiro::compiled_module
summary: Represents a compiled bytecode module. 

---

# tiro::compiled_module



Represents a compiled bytecode module.  [More...](#detailed-description)


`#include "tiropp/compiler.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[compiled_module](/docs/api/classes/classtiro_1_1compiled__module#function-compiled-module)**([tiro&#95;module&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-module-t) raw_module) |
| [tiro_module_t](/docs/api/files/def_8h#typedef-tiro-module-t) | **[raw_module](/docs/api/classes/classtiro_1_1compiled__module#function-raw-module)**() const |

## Detailed Description

```cpp
class tiro::compiled_module;
```

Represents a compiled bytecode module. 

Modules are produced by the compiler. 

## Public Functions Documentation

### function compiled_module

```cpp
inline explicit compiled_module(
    tiro_module_t raw_module
)
```


### function raw_module

```cpp
inline tiro_module_t raw_module() const
```


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100