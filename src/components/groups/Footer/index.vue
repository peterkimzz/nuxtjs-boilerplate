<template>
  <footer class="footer">
    <el-row>
      <el-col
        :xs="12"
        :sm="12"
        :md="6">
        <vue-list
          title="서비스"
          :items="list.services"/>
      </el-col>
      <el-col
        :xs="12"
        :sm="12"
        :md="6">
        <vue-list
          title="안내"
          :items="list.notice"/>
      </el-col>
      <el-col
        :xs="12"
        :sm="12"
        :md="6">
        <vue-list
          title="정책"
          :items="list.policy"/>
      </el-col>
      <el-col
        :xs="12"
        :sm="12"
        :md="6">
        <vue-list
          title="고객센터"
          :items="list.contact"/>
      </el-col>
    </el-row>
  </footer>
</template>

<script>
import VueList from '~/components/units/List'
export default {
  components: {
    VueList
  },
  data() {
    return {
      list: {
        notice: [
          {
            title: 'Github',
            href: 'https://github.com/peterkimzz/nuxtjs-boilerplate',
            target: '_blank'
          },
          {
            title: '문서',
            href: 'https://nuxtjs.org',
            target: '_blank'
          }
        ],
        services: [
          {
            title: '홈',
            href: '/'
          },
          {
            title: '포스트',
            href: '/posts'
          }
        ],
        policy: [
          {
            title: '이용약관',
            href: '/terms'
          },
          {
            title: '개인정보보호정책',
            href: '/privacy'
          }
        ],
        contact: [
          {
            title: '010-0000-0000'
          },
          {
            title: 'peterkimzz69@gmail.com'
          }
        ]
      }
    }
  }
}
</script>
