<template>
    <router-link to="/mainPage" class="back"><i class="fas fa-arrow-circle-left"></i></router-link>

  <div>
   
    <div id="oneMessage">
      <div class="commentaire">
      <newComment :id="id" />
    </div>
      <div id="comment-card" v-for="comment in allComments" :key="comment.id">
        <div class="content">
          <i class="user-name"
            >{{ comment.User.name }} {{ comment.User.firstname }}</i
          >
          <div v-if="isAdmin == true">
          <deleteComment :idComm="comment.id" />
        </div>
        
          
          <i class="date">{{ moment(comment.createdAt).fromNow() }}</i><br />

          <div v-if="comment.idUsers == userId">
              <deleteComment :idComm="comment.id" />
          </div>
          
        </div>


        <strong>{{ comment.comment }}</strong>

        
        
      </div>
    </div>
    
  </div>
</template>


<script>
let moment = require("moment");
import 'moment/locale/fr';
import newComment from "./newComment";
import deleteComment from "./deleteComment";
let jwt = require("jsonwebtoken");

import axios from "axios";


export default {
  name: "oneMessage",
  components: {
    deleteComment,
    newComment,
  },
  data() {
    return {
      moment: moment,
      token: "",
      isAdmin: "",
      id: this.$route.params.id,
      userId: localStorage.getItem("id"),
      allComments: [],
    };
  },
  methods: {
    loadComments() {
      let token = localStorage.getItem("token");
      let decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      axios
        .get("http://localhost:3000/api/messages/" + this.id + "/comments/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          this.isAdmin = decodedToken.isAdmin;
          this.allComments = res.data;
          console.log(this.allComments)
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  },
  mounted() {
    this.loadComments();
  },
};
</script>