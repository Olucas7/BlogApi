const app = new Vue({
  el: "#app",
  data: {
    posts: [],
    id: "",
    actualizar_titulo: "",
    actualizar_content: "",
    crear_titulo:"",
    crear_content:""
  },
  methods: {
    actualizar_post: function () {
      console.log("si se ejecuto la funcion de actualizar");
      const headers = {
        Authorization: "Bearer 8bff9a765d96a7c8403f6e9737c8b2bd",
        "Content-Type": "application/json",
      };
      axios
        .put(
          "http://localhost:3000/posts/" + this.id,
          {
            title: this.actualizar_titulo,
            content: this.actualizar_content,
            published: true,
          },
          {
            headers: {
              Authorization: "Bearer 8bff9a765d96a7c8403f6e9737c8b2bd",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log("Hecho" + " " + response));
    },
    crear_post: function () {
        console.log("si se ejecuto la funcion de crear");
        axios
          .post(
            "http://localhost:3000/posts/",
            {
              title: this.crear_titulo,
              content: this.crear_content,
              published: true,
            },
            {
              headers: {
                Authorization: "Bearer 8bff9a765d96a7c8403f6e9737c8b2bd",
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => console.log("Hecho" + " " + response));
      }
  },
  mounted() {
    axios.get("http://localhost:3000/posts").then((response) => {
      response.data.forEach((element) => {
        let post = {
          author: {
            name: "",
            id: "",
            email: "",
          },
          title: "",
          content: "",
          id: "",
        };
        post.author.name = element.author.name;
        post.author.email = element.author.email;
        post.author.id = element.author.id;
        post.title = element.title;
        post.content = element.content;
        post.id = element.id;
        this.posts.push(post);
      });
      console.log(this.posts);
    });
  },
});
