// useLocalStorage.js

import { ref } from "vue";

export const useLocalStorage = (key: string) => {
    const data = ref<(string | number)[]>([]);

    const getData = () => {
        const localData = localStorage.getItem(key);
        data.value = localData ? JSON.parse(localData) : [];
    }

    const addData = (newData: string | number) => {
        getData();
        if(!data.value.includes(newData))
            data.value.push(newData);
        localStorage.setItem(key, JSON.stringify(data.value))
    }

    const rmData = (rmData: string | number) => {
        getData();
        data.value = data.value.filter((val) => (val !== rmData))
        localStorage.setItem(key, JSON.stringify(data.value))
    }
    
    return { data, getData, addData, rmData };
}
