import { createRuntime, Runtime } from "@src/runtime";
import { AsyncResult, useAsync } from "@components/useAsync";

export function useRuntime(): AsyncResult<Runtime> {
    const result = useAsync(createRuntime, (runtime) => runtime.destroy());
    return result;
}
