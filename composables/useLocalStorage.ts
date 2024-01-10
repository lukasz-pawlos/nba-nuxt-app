import { ref } from "vue";

export const useLocalStorage = (key: string) => {
    const data = ref<(string | number)[] | number>([]);

    const getData = () => {
      const localData = localStorage.getItem(key);
      data.value = localData ? JSON.parse(localData) : [];
    }

    const setData = (newData: any) => {
      data.value = newData;
      localStorage.setItem(key, JSON.stringify(newData))
    }

    const addData = (newData: string | number) => {
      getData();
      if(typeof(data.value) !== "number") {
        if(!data.value.includes(newData))
        data.value.push(newData);
        localStorage.setItem(key, JSON.stringify(data.value))
      }
    }

    const rmData = (rmData: string | number) => {
      getData();
      if(typeof(data.value) !== "number") {
        data.value = data.value.filter((val) => (val !== rmData))
        localStorage.setItem(key, JSON.stringify(data.value))
      }
    }

  onMounted(() => getData());
      
    return { data, setData, getData, addData, rmData };
}
