import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [news, setNews] = useState([]);
  const [apiChange,setApiChange]=useState("bitcoin");

  function change(e){
    const num=e.target.value;
    return num;

  }

  function submit(){
    const num=change();
    setApiChange(num);
  }
 
  const api=async()=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${apiChange}&apiKey=8c81b1e065924112b244b65eaea06c64`);
    let result=await response.json();
    console.log(result);
    setNews(result.articles);
  }

  useEffect(()=>{
    api(); 

  },[apiChange])

  console.log(news);

  return (
    <>
     
    <div>
      
<form className="max-w-md mx-auto pd-4">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={change} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Entertainment, Technogy..." required />
        <button type="submit" onClick={submit} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    </div>
     <div className="grid gap-2 lg:grid-cols-4">
                {news.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
     
    </>
  )
}

export default App
