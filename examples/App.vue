<template>
    <div id="app">
        <!-- <div class="row">
      <dz-button>默认按钮</dz-button>
      <dz-button type="warning">警告按钮</dz-button>
      <dz-button type="danger">危险按钮</dz-button>
      <dz-button type="success">成功按钮</dz-button>
      <dz-button type="primary">主要按钮</dz-button>
      <dz-button type="info">信息按钮</dz-button>
      <dz-button type="info" icon="wode">信息</dz-button>
      <dz-button type="primary" icon="diqu" iconPosition="right">信息</dz-button>
      <dz-button type="primary" loading>信息</dz-button>
      <dz-button type="primary" @click="fn">信息222</dz-button>
      <dz-button type="warning">警告按钮 <i class="dz-icon-wode"></i> </dz-button>
    </div>
    <div class="row">
      <dz-button round>默认按钮</dz-button>
      <dz-button type="warning" round>警告按钮</dz-button>
      <dz-button type="danger" round>危险按钮</dz-button>
      <dz-button type="success" round>成功按钮</dz-button>
      <dz-button type="primary" round>主要按钮</dz-button>
      <dz-button type="info" round>信息按钮</dz-button>
    </div>
    <div class="row">
      <dz-button icon="pan_icon" circle></dz-button>
      <dz-button icon="pan_icon" type="warning" circle></dz-button>
      <dz-button icon="pan_icon" type="danger" circle></dz-button>
      <dz-button icon="pan_icon" type="success" circle></dz-button>
      <dz-button icon="pan_icon" type="primary" circle></dz-button>
      <dz-button icon="pan_icon" type="info" circle></dz-button>
    </div>
 
    <div class="row">
      <dz-button disabled>默认按钮</dz-button>
      <dz-button type="warning" disabled>警告按钮</dz-button>
      <dz-button type="danger" disabled>危险按钮</dz-button>
      <dz-button type="success" disabled>成功按钮</dz-button>
      <dz-button type="primary" disabled>主要按钮</dz-button>
      <dz-button type="info" disabled>信息按钮</dz-button>
    </div>
    <div class="row">
      <dz-button-group>
        <dz-button type="primary" icon="left" iconPosition="left">上一页</dz-button>
        <dz-button type="primary" icon="fenye-shangyiye" iconPosition="right">下一页</dz-button>
      </dz-button-group>
      <dz-button-group>
        <dz-button icon="pan_icon" type="primary"></dz-button>
        <dz-button icon="pan_icon" type="primary"></dz-button>
        <dz-button icon="pan_icon" type="primary"></dz-button>
      </dz-button-group>
    </div>
    <div class="row">
      <dz-button type="text">文字按钮</dz-button>
      <dz-button type="text" disabled>文字按钮</dz-button>
    </div>
     <div class="row">
      <dz-button>默认按钮</dz-button>
      <dz-button size="medium">中等按钮</dz-button>
      <dz-button size="small">小型按钮</dz-button>
      <dz-button size="mini">超小按钮</dz-button>
    </div>
    <div class="row">
      <dz-button round>默认按钮</dz-button>
      <dz-button size="medium" round>中等按钮</dz-button>
      <dz-button size="small" round>小型按钮</dz-button>
      <dz-button size="mini" round>超小按钮</dz-button>
    </div>
    <div class="row">
      <dz-button nativeType="button" round>默认按钮</dz-button>
      <dz-button nativeType="submit" size="medium" round>中等按钮</dz-button>
      <dz-button nativeType="reset" size="small" round>小型按钮</dz-button>
    </div>
    <h2>基础布局</h2>
    <dz-row class="row">
      <dz-col :span="24"><div class="grid-content bg-purple-dark"></div></dz-col>
    </dz-row>
    <dz-row class="row">
      <dz-col :span="12"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="12"><div class="grid-content bg-purple-light"></div></dz-col>
    </dz-row>
    <dz-row class="row">
      <dz-col :span="8"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="8"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="8"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="row">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
    </dz-row>
    <dz-row class="row">
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple-light"></div></dz-col>
    </dz-row>
    <h2>分栏间隔</h2>
    <dz-row :gutter="20" class="row">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>

    <h2>混合布局</h2>
    <dz-row :gutter="20" class="row">
      <dz-col :span="16"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="8"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row :gutter="20" class="row">
      <dz-col :span="8"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="8"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row :gutter="20" class="row">
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="16"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="4"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <h2>分栏偏移</h2>
    <dz-row :gutter="20" class="row">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row :gutter="20" class="row">
      <dz-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row :gutter="20" class="row">
      <dz-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <h2>对齐方式水平</h2>
    <dz-row class="row-bg">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="row-bg" align-h="center">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="row-bg" align-h="end">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="row-bg" align-h="space-between">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="row-bg" align-h="space-around">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <h2>对齐方式垂直</h2>
    <dz-row class="h200" align-v="flex-start">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="h200" align-v="flex-end">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="h200" align-v="stretch">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="h200" align-v="baseline">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="h200" align-v="center">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <dz-row class="h200" align-v="initial">
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :span="6"><div class="grid-content bg-purple"></div></dz-col>
    </dz-row>
    <h2>响应式布局</h2>
    <dz-row :gutter="10">
      <dz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></dz-col>
      <dz-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></dz-col>
      <dz-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></dz-col>
    </dz-row>
    <dz-container>
      <dz-header>Header</dz-header>
      <dz-main>Main</dz-main>
    </dz-container>

    <dz-container>
      <dz-header>Header</dz-header>
      <dz-main>Main</dz-main>
      <dz-footer>Footer</dz-footer>
    </dz-container>

    <dz-container>
      <dz-aside width="200px">Aside</dz-aside>
      <dz-main>Main</dz-main>
    </dz-container>

    <dz-container>
      <dz-header>Header</dz-header>
      <dz-container>
        <dz-aside width="200px">Aside</dz-aside>
        <dz-main>Main</dz-main>
      </dz-container>
    </dz-container>

    <dz-container>
      <dz-header>Header</dz-header>
      <dz-container>
        <dz-aside width="200px">Aside</dz-aside>
        <dz-container>
          <dz-main>Main</dz-main>
          <dz-footer>Footer</dz-footer>
        </dz-container>
      </dz-container>
    </dz-container>

    <dz-container>
      <dz-aside width="200px">Aside</dz-aside>
      <dz-container>
        <dz-header>Header</dz-header>
        <dz-main>Main</dz-main>
      </dz-container>
    </dz-container>

    <dz-container>
      <dz-aside width="200px">Aside</dz-aside>
      <dz-container>
        <dz-header>Header</dz-header>
        <dz-main>Main</dz-main>
        <dz-footer>Footer</dz-footer>
      </dz-container>
    </dz-container> -->
        <!-- <dz-input 
      v-model="input"
      type="text"
    ></dz-input>
   <dz-input
    placeholder="请输入内容"
    v-model="input"
    :disabled="true">
  </dz-input>
  <dz-input
    placeholder="请输入内容"
    v-model="input"
    style="width:300px"
    clearable>
  </dz-input>
  <dz-input
    style="width: 180px;"
    placeholder="请输入内容"
    v-model="input"
    show-password>
  </dz-input>
  <dz-input
    style="width: 180px;"
    placeholder="请输入内容"
    v-model="input"
    prefix-icon="dz-icon-diqu"
    >
  </dz-input>
  <dz-input
    style="width: 180px;"
    placeholder="请输入内容"
    v-model="input"
    suffix-icon="dz-icon-diqu">
  </dz-input>
   slot 方式：
  <dz-input
    placeholder="请选择日期"
    style="width: 180px;"
    v-model="input">
    <i slot="suffix" class="dz-input__icon dz-icon-diqu"></i>
  </dz-input>
  <dz-input
    placeholder="请输入内容"
    style="width: 180px;"
    v-model="input">
    <i slot="prefix" class="dz-input__icon dz-icon-diqu"></i>
  </dz-input>
  <dz-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="input">
  </dz-input> -->
        <div class="row">
            <dz-button>默认按钮</dz-button>
            <dz-button type="primary">主要按钮</dz-button>
            <dz-button type="success">成功按钮</dz-button>
            <dz-button type="info">信息按钮</dz-button>
            <dz-button type="warning">警告按钮</dz-button>
            <dz-button type="danger">危险按钮</dz-button>
        </div>
        <div class="row">
            <dz-button plain>朴素按钮</dz-button>
            <dz-button type="primary" plain>主要按钮</dz-button>
            <dz-button type="success" plain>成功按钮</dz-button>
            <dz-button type="info" plain>信息按钮</dz-button>
            <dz-button type="warning" plain>警告按钮</dz-button>
            <dz-button type="danger" plain>危险按钮</dz-button>
        </div>
        <div class="row">
            <dz-button round>圆角按钮</dz-button>
            <dz-button type="primary" round>主要按钮</dz-button>
            <dz-button type="success" round>成功按钮</dz-button>
            <dz-button type="info" round>信息按钮</dz-button>
            <dz-button type="warning" round>警告按钮</dz-button>
            <dz-button type="danger" round>危险按钮</dz-button>
        </div>
        <div class="row">
            <dz-button icon="dz-icon-search" circle></dz-button>
            <dz-button type="primary" icon="dz-icon-edit" circle></dz-button>
            <dz-button type="success" icon="dz-icon-check" circle></dz-button>
            <dz-button type="info" icon="dz-icon-message" circle></dz-button>
            <dz-button
                type="warning"
                icon="dz-icon-star-off"
                circle
            ></dz-button>
            <dz-button type="danger" icon="dz-icon-delete" circle></dz-button>
        </div>
        <div class="row">
            <dz-button disabled>默认按钮</dz-button>
            <dz-button type="primary" disabled>主要按钮</dz-button>
            <dz-button type="success" disabled>成功按钮</dz-button>
            <dz-button type="info" disabled>信息按钮</dz-button>
            <dz-button type="warning" disabled>警告按钮</dz-button>
            <dz-button type="danger" disabled>危险按钮</dz-button>
        </div>
        <div class="row">
            <dz-button type="text">文字按钮</dz-button>
            <dz-button type="text" disabled>文字按钮</dz-button>
        </div>
        <div class="row">
            <dz-button type="primary" icon="dz-icon-edit"></dz-button>
            <dz-button type="primary" icon="dz-icon-share"></dz-button>
            <dz-button type="primary" icon="dz-icon-delete"></dz-button>
            <dz-button type="primary" icon="dz-icon-search">搜索</dz-button>
            <dz-button type="primary"
                >上传<i class="dz-icon-upload dz-icon--right"></i
            ></dz-button>
        </div>
        <div class="row">
            <dz-button-group>
                <dz-button type="primary" icon="dz-icon-arrow-left"
                    >上一页</dz-button
                >
                <dz-button type="primary"
                    >下一页<i class="dz-icon-arrow-right dz-icon--right"></i
                ></dz-button>
            </dz-button-group>
            <dz-button-group style="margin-left: 20px">
                <dz-button type="primary" icon="dz-icon-edit"></dz-button>
                <dz-button type="primary" icon="dz-icon-share"></dz-button>
                <dz-button type="primary" icon="dz-icon-share"></dz-button>
                <dz-button type="primary" icon="dz-icon-delete"></dz-button>
            </dz-button-group>
        </div>
        <div class="row">
            <dz-button type="primary" :loading="true">加载中</dz-button>
        </div>
        <div class="row">
            <dz-button>默认按钮</dz-button>
            <dz-button size="medium">中等按钮</dz-button>
            <dz-button size="small">小型按钮</dz-button>
            <dz-button size="mini">超小按钮</dz-button>
        </div>
        <div class="row">
            <dz-button round>默认按钮</dz-button>
            <dz-button size="medium" round>中等按钮</dz-button>
            <dz-button size="small" round>小型按钮</dz-button>
            <dz-button size="mini" round native-type="reset"
                >超小按钮</dz-button
            >
        </div>
        <div class="row">
            <dz-input type="text"></dz-input>
            <dz-input
                style="width: 180px"
                placeholder="请输入内容"
                :show-password="true"
            >
            </dz-input>
        </div>
        <div class="row">
            <dz-icon name="platform-eleme"></dz-icon>
            <dz-icon name="share"></dz-icon>
            <dz-icon name="delete"></dz-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            input: "",
        };
    },
    methods: {
        handleClick(e) {
            console.log(e);
        },
    },
    mounted() {},
};
</script>

<style lang="scss">
body {
    margin: 0;
}
#app {
    margin: 100px;
}
.row {
    margin-top: 10px;
}
// #app {
//   margin: 100px;
//   .dz-button + .dz-button {
//     margin-left: 10px;
//   }

//   .row {
//     margin-bottom: 10px;
//   }
//   .dz-button-group {
//     .dz-button + .dz-button {
//       margin-left: 0;
//     }
//   }
//   .dz-button-group + .dz-button-group {
//     margin-left: 10px;
//   }
//   .box {
//     height: 30px;
//   }
//   .bg-purple-dark {
//     background: #99a9bf;
//   }
//   .bg-purple {
//     background: #d3dce6;
//   }
//   .bg-purple-light {
//     background: #e5e9f2;
//   }
//   .grid-content {
//     border-radius: 4px;
//     min-height: 36px;
//   }
//    .dz-row {
//     margin-bottom: 20px;
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
//   .dz-col {
//     border-radius: 4px;
//   }
//   .bg-purple-dark {
//     background: #99a9bf;
//   }
//   .bg-purple {
//     background: #d3dce6;
//   }
//   .bg-purple-light {
//     background: #e5e9f2;
//   }
//   .grid-content {
//     border-radius: 4px;
//     min-height: 36px;
//   }
//   .row-bg {
//     padding: 10px 0;
//     background-color: #f9fafc;
//   }
//   .h200 {
//     height: 160px;
//     background-color: rgba(255,0,0,.1);
//     & + .h200 {
//       margin-top: 20px;
//     }
//   }
// }
// .dz-header, .dz-footer {
//     background-color: #B3C0D1;
//     color: #333;
//     text-align: center;
//     line-height: 60px;
//   }

//   .dz-aside {
//     background-color: #D3DCE6;
//     color: #333;
//     text-align: center;
//     line-height: 200px;
//   }

//   .dz-main {
//     background-color: #E9EEF3;
//     color: #333;
//     text-align: center;
//     line-height: 160px;
//   }

//   body > .dz-container {
//     margin-bottom: 40px;
//   }

//   .dz-container:nth-child(5) .dz-aside,
//   .dz-container:nth-child(6) .dz-aside {
//     line-height: 260px;
//   }

//   .dz-container:nth-child(7) .dz-aside {
//     line-height: 320px;
//   }
</style>
