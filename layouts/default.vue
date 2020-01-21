<template lang="pug">
.container
  el-alert(title="Try DEX with any tokens auto listing!").mt-4
    .lead
      a(href="https://tokenswap.nordicenergy.io/eos/" target="_blank") EOS Tokens
      | - TokenSwap exchange, with token listing and onchain limit matching. No commissions for beta, try it now!

  .row.app-frame.mb-5
    .col-lg.m-auto
      .d-flex
        nuxt-link(tag="span" :to="{name: 'index'}" style="cursor: pointer;")
          img(src="~/assets/logo.svg").logo

        h1.align-self-center.ml-5.lead.mt-2
          span EOS TokenSwap Decentralized Exchange
          br
          span Trade Nordic Energy´s eosio based token with any eosio token.

        .d-flex.align-items-center.span.ml-auto.pr-3.pt-3
          gh-btns-star(slug="nordicenergy/tokenswap" show-count)

          el-tooltip(content="Join us on Telegram!" placement="top" effect="light")
            a(href="https://t.me/nordicenergy/tokensdex/eos/" target="_blank")
              img(src="telegram.png" height="40").ml-2

      el-alert(title="Scatter is not connected:" :closable="false" show-icon type="info" v-if="!$store.state.chain.scatterConnected").mt-2
        span.ml-1 Unlock or install
        a(href="https://get-scatter.com/" target="_blank") Scatter
        i(@click="scatterConnect" size="mini").el-alert__closebtn Update

      el-alert(:closable="false" show-icon type="error" v-if="$store.state.chain.oldScatter").mt-4
        span.ml-1  You are using an old version of Scatter! So the app may not work correctly.

        a(href="https://get-scatter.com/" target="_blank")  Update Scatter

      el-alert(title="Node is not connected:" :closable="false"  show-icon type="error" v-if="netError").mt-2
        span.ml-1 Network is unreacheble pleace check your internet connection.

      nuxt

      .row.mt-3
        .col.text-mutted
          small
            span.text-muted App version:
              a(href="https://github.com/nordicenergy/EOS-TokenSwap" target="_blank").text-secondary {{ lastCommit.sha }}
                span(v-if="lastCommit.commit") ({{ lastCommit.commit.message }})


  footer
    .row
      .col.d-flex
        span.ml-auto Created by
          b
            a(href="https://nordicenergy.co" target="_blank")  #BitWizard
</template>

<script>
  import axios from 'axios'

  export default {
  data() {
    return {
      netError: false,
      lastCommit: {}
    }
  },

  async created() {
    this.getVersion();

    try {
      await this.$store.getters['chain/rpc'].get_info()
    } catch(e) {
      this.netError = true;
      console.log('Net error', e)
    }
  },

  methods: {
    async scatterConnect() {
      try {
        await this.$store.dispatch('chain/scatterConnect');

        if(this.$store.state.chain.scatterConnected)
          this.$notify({ title: 'Scatter', message: 'Scatter connected', type: 'success' })

      } catch(e) {
        this.$notify({ title: 'Scatter error', message: e.message, type: 'error' })
      }
    },

    async getVersion() {
      this.lastCommit = (await axios.get('https://api.github.com/nordicenergy/eos-tokenswap/commits/master')).data
    }
  }
}
</script>

<style>
.logo {
  width: 100%;
  max-width: 300px;
}

.app-frame {
  margin-top: 40px;
}

footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding-right: 5px;
}
</style>
