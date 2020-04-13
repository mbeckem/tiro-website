add_executable(tiro_wasm main.cpp)
target_link_libraries(tiro_wasm PRIVATE tiro)
target_include_directories(tiro_wasm PRIVATE "${PROJECT_SOURCE_DIR}/deps")
