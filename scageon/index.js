// useFetch

// url
// loading error
// useFetch(url)

// async function fetchData(url) {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new error("error");
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error");
//   }
// }
const data = useFetch((url) => {


    .then((data) => data)
    .then((data) => console.log(data))

    .catch((error) => error);
});

if(loading) return <p>Loading....</p>
if(error) return <p>Error...</p>

// useFetch custome hook 




