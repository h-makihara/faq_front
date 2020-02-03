import axios

const vm = new Vue({
  el: '#show',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => {this.results = response.data.bpi})
  }
});
