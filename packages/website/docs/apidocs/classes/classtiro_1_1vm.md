---
title: tiro::vm

---

# tiro::vm






`#include "tiropp/vm.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| const std::any & | **[userdata](/docs/api/classes/classtiro_1_1vm#function-userdata)**() const<br>Userdata associated with this virtual machine.  |
| std::any & | **[userdata](/docs/api/classes/classtiro_1_1vm#function-userdata)**()<br>Userdata associated with this virtual machine.  |
| | **[vm](/docs/api/classes/classtiro_1_1vm#function-vm)**()<br>Constructs a new vm with default settings.  |
| | **[vm](/docs/api/classes/classtiro_1_1vm#function-vm)**([vm&#95;settings](/docs/api/classes/structtiro&#95;1&#95;1vm&#95;&#95;settings) settings)<br>Constructs a new vm with the given settings.  |
| | **[vm](/docs/api/classes/classtiro_1_1vm#function-vm)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) && ) =delete |
| [vm](/docs/api/classes/classtiro_1_1vm) & | **[operator=](/docs/api/classes/classtiro_1_1vm#function-operator=)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) && ) =delete |
| size_t | **[page_size](/docs/api/classes/classtiro_1_1vm#function-page-size)**() const<br>Returns the vm's page size, in bytes.  |
| void | **[load_std](/docs/api/classes/classtiro_1_1vm#function-load-std)**()<br>Loads the "std" module.  |
| void | **[load](/docs/api/classes/classtiro_1_1vm#function-load)**(const [compiled&#95;module](/docs/api/classes/classtiro&#95;1&#95;1compiled&#95;&#95;module) & mod)<br>Loads the given compiled module.  |
| bool | **[has_ready](/docs/api/classes/classtiro_1_1vm#function-has-ready)**() const<br>Returns true if the virtual machine has at least one coroutine ready for execution, false otherwise.  |
| void | **[run_ready](/docs/api/classes/classtiro_1_1vm#function-run-ready)**()<br>Runs all ready coroutines. Returns (and does not block) when all coroutines are either waiting or done.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1vm#function-raw-vm)**() const<br>Returns the raw virtual machine instance managed by this object.  |
| [vm](/docs/api/classes/classtiro_1_1vm) & | **[unsafe_from_raw_vm](/docs/api/classes/classtiro_1_1vm#function-unsafe-from-raw-vm)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm)<br>Returns a reference to the original [tiro::vm](/docs/api/classes/classtiro_1_1vm) instance.  |

## Public Functions Documentation

### function userdata

```cpp
inline const std::any & userdata() const
```

Userdata associated with this virtual machine. 

### function userdata

```cpp
inline std::any & userdata()
```

Userdata associated with this virtual machine. 

### function vm

```cpp
inline vm()
```

Constructs a new vm with default settings. 

### function vm

```cpp
inline explicit vm(
    vm_settings settings
)
```

Constructs a new vm with the given settings. 

### function vm

```cpp
vm(
    vm && 
) =delete
```


### function operator=

```cpp
vm & operator=(
    vm && 
) =delete
```


### function page_size

```cpp
inline size_t page_size() const
```

Returns the vm's page size, in bytes. 

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

### function unsafe_from_raw_vm

```cpp
static inline vm & unsafe_from_raw_vm(
    tiro_vm_t raw_vm
)
```

Returns a reference to the original [tiro::vm](/docs/api/classes/classtiro_1_1vm) instance. 

The raw_vm MUST have been created by the [tiro::vm](/docs/api/classes/classtiro_1_1vm) constructor. 


-------------------------------

Updated on 2021-10-02 at 22:50:45 +0200