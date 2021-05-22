---
title: tiro::vm

---

# tiro::vm




`#include "tiropp/vm.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[vm](/docs/api/classes/classtiro_1_1vm#function-vm)**() |
| | **[vm](/docs/api/classes/classtiro_1_1vm#function-vm)**([vm_settings](/docs/api/classes/structtiro_1_1vm__settings) settings) |
| | **[vm](/docs/api/classes/classtiro_1_1vm#function-vm)**([vm](/docs/api/classes/classtiro_1_1vm) && ) |
| const std::any & | **[userdata](/docs/api/classes/classtiro_1_1vm#function-userdata)**() const |
| std::any & | **[userdata](/docs/api/classes/classtiro_1_1vm#function-userdata)**() |
| [vm](/docs/api/classes/classtiro_1_1vm) & | **[unsafe_from_raw_vm](/docs/api/classes/classtiro_1_1vm#function-unsafe_from_raw_vm)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) raw_vm)<br>Returns a reference to the original [tiro::vm](/docs/api/classes/classtiro_1_1vm) instance.  |
| void | **[run_ready](/docs/api/classes/classtiro_1_1vm#function-run_ready)**()<br>Runs all ready coroutines. Returns (and does not block) when all coroutines are either waiting or done.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[raw_vm](/docs/api/classes/classtiro_1_1vm#function-raw_vm)**() const<br>Returns the raw virtual machine instance managed by this object.  |
| [vm](/docs/api/classes/classtiro_1_1vm) & | **[operator=](/docs/api/classes/classtiro_1_1vm#function-operator=)**([vm](/docs/api/classes/classtiro_1_1vm) && ) |
| void | **[load_std](/docs/api/classes/classtiro_1_1vm#function-load_std)**()<br>Loads the "std" module.  |
| void | **[load](/docs/api/classes/classtiro_1_1vm#function-load)**(const [compiled_module](/docs/api/classes/classtiro_1_1compiled__module) & mod)<br>Loads the given compiled module.  |
| bool | **[has_ready](/docs/api/classes/classtiro_1_1vm#function-has_ready)**() const<br>Returns true if the virtual machine has at least one coroutine ready for execution, false otherwise.  |

## Public Functions Documentation

### function vm

```cpp
inline vm()
```


### function vm

```cpp
inline explicit vm(
    vm_settings settings
)
```


### function vm

```cpp
vm(
    vm && 
)
```


### function userdata

```cpp
inline const std::any & userdata() const
```


### function userdata

```cpp
inline std::any & userdata()
```


### function unsafe_from_raw_vm

```cpp
static inline vm & unsafe_from_raw_vm(
    tiro_vm_t raw_vm
)
```

Returns a reference to the original [tiro::vm](/docs/api/classes/classtiro_1_1vm) instance. 

The raw_vm MUST have been created by the [tiro::vm](/docs/api/classes/classtiro_1_1vm) constructor. 


### function run_ready

```cpp
inline void run_ready()
```

Runs all ready coroutines. Returns (and does not block) when all coroutines are either waiting or done. 

### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```

Returns the raw virtual machine instance managed by this object. 

### function operator=

```cpp
vm & operator=(
    vm && 
)
```


### function load_std

```cpp
inline void load_std()
```

Loads the "std" module. 

### function load

```cpp
inline void load(
    const compiled_module & mod
)
```

Loads the given compiled module. 

### function has_ready

```cpp
inline bool has_ready() const
```

Returns true if the virtual machine has at least one coroutine ready for execution, false otherwise. 

-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST