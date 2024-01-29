import { defineStore } from 'pinia';
import { ref } from 'vue';
import cachedAxios from '../axios.js';


export const useMovieStore = defineStore('movieStore', () => {
  //data
  const data = ref([])
  const isLoading = ref(false);
  const isError = ref(false);
  const dataPerson = ref<any[]>([]);
  const page = ref(0);

  //functions
  const load = () => {
    if (page.value === 35651) {
      alert('Последний страница');
      return;
    }
    page.value++;
    getPerson(page);
  };
  const getPerson = async (page) => {
    try {
      isError.value = false;
      isLoading.value = true;
      const res = await cachedAxios.get(
        `https://api.thecatapi.com/v1/images/search?limit=15&page=${page.value}`,
        {
          headers: {
            'x-api-key': 'live_CcWRuj2DUaa6ga7yc4ES8AzrKPNfrIKIqR4wLxCvlaUDuaDk1SZMi9sXsB24zrPJ',
          },
        },
      );
  
      const dataZ = res.data;
      console.log('ss', dataZ);
  
      data.value = [...data.value, ...dataZ];
      
      isError.value = false;
    } catch (error) {
      console.log(error);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };
  const setData = (info)=>{
    data.value = info
  }  


  return {
    setData,
    data,
    isLoading,
    isError,
    load,
    getPerson,
    page
    
  };
});
