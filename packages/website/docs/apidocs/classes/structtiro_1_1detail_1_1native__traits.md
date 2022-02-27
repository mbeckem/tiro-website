---
title: tiro::detail::native_traits

---

# tiro::detail::native_traits



 [More...](#detailed-description)


`#include "tiropp/native_type.hpp"`

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[layout](/docs/api/classes/structtiro_1_1detail_1_1native__traits_1_1layout)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[constructor](/docs/api/classes/structtiro_1_1detail_1_1native__traits#function-constructor)**(T && instance, void &#42; data) |
| T * | **[accessor](/docs/api/classes/structtiro_1_1detail_1_1native__traits#function-accessor)**(void &#42; data) |
| void | **[finalizer](/docs/api/classes/structtiro_1_1detail_1_1native__traits#function-finalizer)**(void &#42; data, ] size&#95;t data_size) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr size&#95;t | **[size](/docs/api/classes/structtiro_1_1detail_1_1native__traits#variable-size)**  |

## Detailed Description

```cpp
template <typename T >
struct tiro::detail::native_traits;
```

## Public Functions Documentation

### function constructor

```cpp
static inline void constructor(
    T && instance,
    void * data
)
```


### function accessor

```cpp
static inline T * accessor(
    void * data
)
```


### function finalizer

```cpp
static inline void finalizer(
    void * data,
    ] size_t data_size
)
```


## Public Attributes Documentation

### variable size

```cpp
static constexpr size_t size = sizeof(layout);
```


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100