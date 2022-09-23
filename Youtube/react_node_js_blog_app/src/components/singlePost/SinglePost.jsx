import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Jason</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus inventore neque provident aspernatur esse voluptates placeat commodi facere expedita minus animi, ad debitis quod consequatur dolorum delectus dolorem quia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolorem similique veritatis quod consequatur facilis harum, optio alias accusantium sunt modi nesciunt inventore sit nemo accusamus doloribus suscipit? Inventore, repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magni similique, impedit exercitationem sit accusamus animi reprehenderit error dignissimos sint quo vero veniam voluptates ratione non, incidunt tempore neque assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatibus itaque vero error quisquam sunt rerum, sapiente laudantium temporibus suscipit. Magni necessitatibus explicabo ipsum excepturi eos reprehenderit dolorem deleniti enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem delectus vel quasi aliquid, sint maxime nobis expedita, incidunt laudantium, neque exercitationem temporibus odit possimus sed ducimus ad voluptatibus vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et minus illo odit inventore. Ex, aut. Commodi, nostrum optio saepe magnam alias rerum. Rem commodi ducimus totam officia accusamus est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus inventore neque provident aspernatur esse voluptates placeat commodi facere expedita minus animi, ad debitis quod consequatur dolorum delectus dolorem quia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolorem similique veritatis quod consequatur facilis harum, optio alias accusantium sunt modi nesciunt inventore sit nemo accusamus doloribus suscipit? Inventore, repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magni similique, impedit exercitationem sit accusamus animi reprehenderit error dignissimos sint quo vero veniam voluptates ratione non, incidunt tempore neque assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatibus itaque vero error quisquam sunt rerum, sapiente laudantium temporibus suscipit. Magni necessitatibus explicabo ipsum excepturi eos reprehenderit dolorem deleniti enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem delectus vel quasi aliquid, sint maxime nobis expedita, incidunt laudantium, neque exercitationem temporibus odit possimus sed ducimus ad voluptatibus vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et minus illo odit inventore. Ex, aut. Commodi, nostrum optio saepe magnam alias rerum. Rem commodi ducimus totam officia accusamus est.
        </p>
      </div>
    </div>
  )
}
