<template>
  <div class="qaDetailShow">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" >FAQ 詳細画面</a>
		</nav>
		<table id='qaDetail' class='table table-hover'>
			<thead class="thead-dark">
				<tbody v-for="(qa, index) in qajson" :key="index">
					<div v-if="qa.QID===qid">
						<tr>
							<th>
								Question
							</th>
							<td>
								{{ qa.question}}
							</td>
						</tr>
						<tr>
							<th>
								Answer
							</th>
							<td>
								{{ qa.answer}}
							</td>
						</tr>
						<tr>
							<th>
								Service
							</th>
							<td>
								{{ qa.service_name}}
							</td>
						</tr>
						<tr>
							<th>
								Tags
							</th>
							<td>
								<span v-for="(tag, index) in qa.tags" :key="index">
									{{ tag }} <br />
								</span>
							</td>
						</tr>
					</div>
				</tbody>
			</thead>
		</table>
  </div>
</template>

<script>

export default {
  name: 'qaDetailShow',
	props: [
		'qid',
		'qajson'
	],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
h1,h2 {
  font-weight: normal;
  margin: 40px 0 0;
  white-space: pre-line;
  word-wrap: break-word;
}
a {
  color: #42b983;
}
th,td {
  text-align:center;
  white-space: pre-line;
  word-wrap: break-word;
}

</style>
