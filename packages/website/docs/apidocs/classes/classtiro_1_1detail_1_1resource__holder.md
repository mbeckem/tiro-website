---
title: tiro::detail::resource_holder

---

# tiro::detail::resource_holder



 [More...](#detailed-description)


`#include "tiropp/detail/resource_holder.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-resource-holder)**() =default |
| | **[resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-resource-holder)**(Resource res) |
| | **[~resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-~resource-holder)**() |
| | **[resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-resource-holder)**([resource&#95;holder](/docs/api/classes/classtiro&#95;1&#95;1detail&#95;1&#95;1resource&#95;&#95;holder) && other) |
| [resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder) & | **[operator=](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-operator=)**([resource&#95;holder](/docs/api/classes/classtiro&#95;1&#95;1detail&#95;1&#95;1resource&#95;&#95;holder) && other) |
| Resource | **[get](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-get)**() const |
| | **[operator Resource](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-operator-resource)**() const |
| | **[operator bool](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-operator-bool)**() const |
| void | **[reset](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-reset)**() |
| Resource * | **[out](/docs/api/classes/classtiro_1_1detail_1_1resource__holder#function-out)**() |

## Detailed Description

```cpp
template <typename Resource ,
auto Deleter>
class tiro::detail::resource_holder;
```

## Public Functions Documentation

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


### function ~resource_holder

```cpp
inline ~resource_holder()
```


### function resource_holder

```cpp
inline resource_holder(
    resource_holder && other
)
```


### function operator=

```cpp
inline resource_holder & operator=(
    resource_holder && other
)
```


### function get

```cpp
inline Resource get() const
```


### function operator Resource

```cpp
inline operator Resource() const
```


### function operator bool

```cpp
inline explicit operator bool() const
```


### function reset

```cpp
inline void reset()
```


### function out

```cpp
inline Resource * out()
```


-------------------------------

Updated on 2021-09-26 at 16:20:41 +0200