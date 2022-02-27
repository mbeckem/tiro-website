---
title: tiro::detail

---

# tiro::detail



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro::detail::native_traits](/docs/api/classes/structtiro_1_1detail_1_1native__traits)**  |
| struct | **[tiro::detail::native_type_data](/docs/api/classes/structtiro_1_1detail_1_1native__type__data)**  |
| class | **[tiro::detail::resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder)**  |
| struct | **[tiro::detail::type_to_value_kind](/docs/api/classes/structtiro_1_1detail_1_1type__to__value__kind)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| template <typename... Handles\> <br>void | **[check_handles](/docs/api/namespaces/namespacetiro_1_1detail#function-check-handles)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) , const Handles & ...) |
| std::string_view | **[from_raw](/docs/api/namespaces/namespacetiro_1_1detail#function-from-raw)**(const [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) & str) |
| [tiro_string_t](/docs/api/files/def_8h#typedef-tiro-string-t) | **[to_raw](/docs/api/namespaces/namespacetiro_1_1detail#function-to-raw)**(const std::string&#95;view & str) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([null](/docs/api/classes/classtiro&#95;1&#95;1null) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([boolean](/docs/api/classes/classtiro&#95;1&#95;1boolean) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([integer](/docs/api/classes/classtiro&#95;1&#95;1integer) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([float&#95;](/docs/api/classes/classtiro&#95;1&#95;1float&#95;&#95;) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([string](/docs/api/classes/classtiro&#95;1&#95;1string) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([function](/docs/api/classes/classtiro&#95;1&#95;1function) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([tuple](/docs/api/classes/classtiro&#95;1&#95;1tuple) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([record](/docs/api/classes/classtiro&#95;1&#95;1record) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([record&#95;schema](/docs/api/classes/classtiro&#95;1&#95;1record&#95;&#95;schema) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([array](/docs/api/classes/classtiro&#95;1&#95;1array) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([result](/docs/api/classes/classtiro&#95;1&#95;1result) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([exception](/docs/api/classes/classtiro&#95;1&#95;1exception) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([coroutine](/docs/api/classes/classtiro&#95;1&#95;1coroutine) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([module](/docs/api/classes/classtiro&#95;1&#95;1module) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([native](/docs/api/classes/classtiro&#95;1&#95;1native) ) |
| | **[TIRO_MAP_TYPE](/docs/api/namespaces/namespacetiro_1_1detail#function-tiro-map-type)**([type](/docs/api/classes/classtiro&#95;1&#95;1type) ) |
| template <typename T \> <br>constexpr [value_kind](/docs/api/namespaces/namespacetiro#enum-value-kind) | **[kind_of](/docs/api/namespaces/namespacetiro_1_1detail#function-kind-of)**() |
| template <typename T \> <br>constexpr [value_kind](/docs/api/namespaces/namespacetiro#enum-value-kind) | **[kind_of](/docs/api/namespaces/namespacetiro_1_1detail#function-kind-of)**(T &#42; ) |


## Functions Documentation

### function check_handles

```cpp
template <typename... Handles>
void check_handles(
    tiro_vm_t ,
    const Handles & ...
)
```


### function from_raw

```cpp
inline std::string_view from_raw(
    const tiro_string_t & str
)
```


### function to_raw

```cpp
inline tiro_string_t to_raw(
    const std::string_view & str
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    null 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    boolean 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    integer 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    float_ 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    string 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    function 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    tuple 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    record 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    record_schema 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    array 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    result 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    exception 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    coroutine 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    module 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    native 
)
```


### function TIRO_MAP_TYPE

```cpp
TIRO_MAP_TYPE(
    type 
)
```


### function kind_of

```cpp
template <typename T >
constexpr value_kind kind_of()
```


### function kind_of

```cpp
template <typename T >
constexpr value_kind kind_of(
    T * 
)
```






-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100