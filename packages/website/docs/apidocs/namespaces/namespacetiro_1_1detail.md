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

## Functions

|                | Name           |
| -------------- | -------------- |
| template <typename... Handles\> <br>void | **[check_handles](/docs/api/namespaces/namespacetiro_1_1detail#function-check-handles)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) , const Handles & ...) |
| std::string_view | **[from_raw](/docs/api/namespaces/namespacetiro_1_1detail#function-from-raw)**(const [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) & str) |
| [tiro_string_t](/docs/api/files/def_8h#typedef-tiro-string-t) | **[to_raw](/docs/api/namespaces/namespacetiro_1_1detail#function-to-raw)**(const std::string&#95;view & str) |


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






-------------------------------

Updated on 2021-10-02 at 17:24:37 +0200