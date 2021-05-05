---
title: tiro::detail::resource_holder

---

# tiro::detail::resource_holder



 [More...](#detailed-description)


`#include "tiropp/detail/resource_holder.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-~resource_holder)**() |
| | **[resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-resource_holder)**() =default |
| | **[resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-resource_holder)**(Resource res) |
| | **[resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-resource_holder)**([resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder) && other) |
| void | **[reset](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-reset)**() |
| Resource * | **[out](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-out)**() |
| [resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder) & | **[operator=](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-operator=)**([resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder) && other) |
| | **[operator bool](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-operator-bool)**() const |
| | **[operator Resource](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-operator-resource)**() const |
| Resource | **[get](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-get)**() const |

## Detailed Description

```cpp
template <typename Resource ,
auto Deleter>
class tiro::detail::resource_holder;
```

## Public Functions Documentation

### function ~resource_holder

```cpp
inline ~resource_holder()
```


### function resource_holder

```cpp
resource_holder() =default
```


### function resource_holder

```cpp
inline resource_holder(
    Resource res
)
```


### function resource_holder

```cpp
inline resource_holder(
    resource_holder && other
)
```


### function reset

```cpp
inline void reset()
```


### function out

```cpp
inline Resource * out()
```


### function operator=

```cpp
inline resource_holder & operator=(
    resource_holder && other
)
```


### function operator bool

```cpp
inline explicit operator bool() const
```


### function operator Resource

```cpp
inline operator Resource() const
```


### function get

```cpp
inline Resource get() const
```


-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST