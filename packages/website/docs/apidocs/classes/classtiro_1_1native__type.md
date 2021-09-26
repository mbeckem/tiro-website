---
title: tiro::native_type

---

# tiro::native_type



 [More...](#detailed-description)


`#include "tiropp/fwd.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[native_type](/docs/api/classes/classtiro_1_1native__type#function-native-type)**(std::string name) |
| | **[~native_type](/docs/api/classes/classtiro_1_1native__type#function-~native-type)**() =default |
| | **[native_type](/docs/api/classes/classtiro_1_1native__type#function-native-type)**([native&#95;type](/docs/api/classes/classtiro&#95;1&#95;1native&#95;&#95;type) && ) =default |
| [native_type](/docs/api/classes/classtiro_1_1native__type) & | **[operator=](/docs/api/classes/classtiro_1_1native__type#function-operator=)**([native&#95;type](/docs/api/classes/classtiro&#95;1&#95;1native&#95;&#95;type) && ) =default |
| bool | **[valid](/docs/api/classes/classtiro_1_1native__type#function-valid)**() const<br>Returns true is valid, i.e. if this [native_type](/docs/api/classes/classtiro_1_1native__type) has not been moved from.  |
| const std::string & | **[name](/docs/api/classes/classtiro_1_1native__type#function-name)**() const<br>Returns the native type's name (the value of original constructor argument).  |
| bool | **[is_instance](/docs/api/classes/classtiro_1_1native__type#function-is-instance)**(const [native](/docs/api/classes/classtiro&#95;1&#95;1native) & object) const<br>Returns true if the given native object is an instance of this type.  |
| [native](/docs/api/classes/classtiro_1_1native) | **[make](/docs/api/classes/classtiro_1_1native__type#function-make)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, T && instance) const<br>Constructs a new object of this type. The contents of `instance` will be moved into the constructed object.  |
| T * | **[access](/docs/api/classes/classtiro_1_1native__type#function-access)**(const [native](/docs/api/classes/classtiro&#95;1&#95;1native) & object) const<br>Returns the address of the native object instance.  |
| bool | **[is_destroyed](/docs/api/classes/classtiro_1_1native__type#function-is-destroyed)**(const [native](/docs/api/classes/classtiro&#95;1&#95;1native) & object) const<br>Returns true if the referenced object was already destroyed manually by calling `[destroy()]()`.  |
| void | **[destroy](/docs/api/classes/classtiro_1_1native__type#function-destroy)**(const [native](/docs/api/classes/classtiro&#95;1&#95;1native) & object) const<br>Manually destroys the native object.  |

## Detailed Description

```cpp
template <typename T >
class tiro::native_type;
```

## Public Functions Documentation

### function native_type

```cpp
inline explicit native_type(
    std::string name
)
```


### function ~native_type

```cpp
~native_type() =default
```


### function native_type

```cpp
native_type(
    native_type && 
) =default
```


### function operator=

```cpp
native_type & operator=(
    native_type && 
) =default
```


### function valid

```cpp
inline bool valid() const
```

Returns true is valid, i.e. if this [native_type](/docs/api/classes/classtiro_1_1native__type) has not been moved from. 

### function name

```cpp
inline const std::string & name() const
```

Returns the native type's name (the value of original constructor argument). 

### function is_instance

```cpp
inline bool is_instance(
    const native & object
) const
```

Returns true if the given native object is an instance of this type. 

### function make

```cpp
inline native make(
    vm & v,
    T && instance
) const
```

Constructs a new object of this type. The contents of `instance` will be moved into the constructed object. 

### function access

```cpp
inline T * access(
    const native & object
) const
```

Returns the address of the native object instance. 

TODO: This API will have to change (or become more dangerous) once the gc starts to move objects around. 


### function is_destroyed

```cpp
inline bool is_destroyed(
    const native & object
) const
```

Returns true if the referenced object was already destroyed manually by calling `[destroy()]()`. 

### function destroy

```cpp
inline void destroy(
    const native & object
) const
```

Manually destroys the native object. 

Future `[access()](/docs/api/classes/classtiro_1_1native__type#function-access)` calls to the same object will fail with an exception. Note that objects are destroyed automatically when they are collected by the garbage collector. This function allows the programmer to trigger the destruction at an earlier point in time. 


-------------------------------

Updated on 2021-09-26 at 20:39:59 +0200