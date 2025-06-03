<template>
  <div class="index-view">
    <el-row>
      <el-col :span="9">
        <div class="col-content-left">
          <img src="@/assets/logo.png" alt="" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="col-content-right">
          <el-form
            ref="formRef"
            :label-position="'top'"
            :model="formModel"
            :rules="formRules"
          >
            <el-form-item label="门店">
              <el-select v-model="formModel.storeName" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="日期与时间">
              <el-date-picker
                v-model="formModel.date"
                style="width: 100%"
                type="date"
                placeholder="Pick a day"
              />
            </el-form-item>
            <el-form-item label="">
              <el-time-select
                v-model="formModel.time"
                start="08:30"
                step="00:15"
                end="18:30"
                placeholder="Select time"
              />
            </el-form-item>
          </el-form>
          <div v-for="(item, index) in formList" :key="index">
            <el-form
              :ref="item.ref"
              :label-position="'top'"
              :model="item.model"
              :rules="item.rules"
            >
              <el-form-item
                v-for="(iv, ivIndex) in item.itemList"
                :key="ivIndex"
                :label="iv.label"
              >
                <div class="add-server-select" v-if="iv.value === 'server'">
                  <el-select v-model="item.model.server" placeholder="Select">
                    <el-option
                      v-for="item in iv.optionsData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                  <el-icon
                    class="add-server-icon"
                    v-if="iv.value === 'server' && iv.label !== ''"
                    @click="addServer(item.ref)"
                    ><CirclePlus
                  /></el-icon>
                  <el-icon
                    class="add-server-icon"
                    v-if="iv.value === `server${ivIndex +1}` && iv.label === ''"
                    @click="delServer(item.ref, iv.id)"
                    ><Delete
                  /></el-icon>
                </div>
                <el-select v-else v-model="item.model[iv.value]" placeholder="Select">
                  <el-option
                    v-for="item in iv.optionsData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-form>
            <div class="add-type">
              <el-row :gutter="24">
                <el-col :span="12" class="back-btn-col">
                  <el-button class="back-btn" @click="addType">添加类别</el-button>
                </el-col>
                <el-col :span="12">
                  <div class="back-btn-col-del">
                    <el-icon class="add-server-icon" @click="delType(item.ref)"
                      ><Delete
                    /></el-icon>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="footer-btns">
            <el-row :gutter="24">
              <el-col :span="12" class="back-btn-col">
                <el-button class="back-btn">返回</el-button>
              </el-col>
              <el-col :span="12" class="sure-btn-col">
                <el-button class="sure-btn">确认</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getRandomString } from "@/utils/index";
import { CirclePlus, Delete } from "@element-plus/icons-vue";
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const formModel = ref({
  storeName: "",
  date: "",
  time: "",
});
const formRules = computed(() => {
  return {
    storeName: [{ required: true, message: "", trigger: "change" }],
    date: [{ required: true, message: "", trigger: "change" }],
    time: [{ required: true, message: "", trigger: "change" }],
  };
});
const formList = ref<any>([
  {
    ref: getRandomString(8),
    itemList: [
      {
        id: getRandomString(8),
        label: "类别",
        value: "type",
        optionsData: [
          {
            label: "类别1",
            value: "1",
          },
        ],
      },
      {
        id: getRandomString(8),
        label: "服务",
        value: "server",
        optionsData: [
          {
            label: "类别1",
            value: "1",
          },
        ],
      },
      {
        id: getRandomString(8),
        label: "员工",
        value: "customer",
        optionsData: [
          {
            label: "类别1",
            value: "1",
          },
        ],
      },
    ],
    model: {
      customer: "",
      type: "",
      server: "",
    },
    rules: {
      customer: [{ required: true, message: "", trigger: "change" }],
      type: [{ required: true, message: "", trigger: "change" }],
      server: [{ required: true, message: "", trigger: "change" }],
    },
  },
]);
const addType = () => {
  formList.value = formList.value.concat([
    {
      ref: getRandomString(8),
      itemList: [
        {
          id: getRandomString(8),
          label: "类别",
          value: "type",
          optionsData: [
            {
              label: "类别1",
              value: "1",
            },
          ],
        },
        {
          id: getRandomString(8),
          label: "服务",
          value: "server",
          optionsData: [
            {
              label: "类别1",
              value: "1",
            },
          ],
        },
        {
          id: getRandomString(8),
          label: "员工",
          value: "customer",
          optionsData: [
            {
              label: "类别1",
              value: "1",
            },
          ],
        },
      ],
      model: {
        customer: "",
        type: "",
        server: "",
      },
      rules: {
        customer: [{ required: true, message: "", trigger: "change" }],
        type: [{ required: true, message: "", trigger: "change" }],
        server: [{ required: true, message: "", trigger: "change" }],
      },
    },
  ]);
};
const delType = (id: string) => {
  if (formList.value.length === 1) {
    return false;
  }
  formList.value = formList.value.filter((iv: any) => iv.ref !== id);
};
const addServer = (id: string) => {
  formList.value.forEach((iv: any) => {
    if (iv.ref === id) {
      iv.itemList.splice(iv.itemList.length - 1, 0, {
        id: getRandomString(8),
        label: "",
        value: `server${iv.itemList.length - 2}`,
        optionsData: [
          {
            label: "类别1",
            value: "1",
          },
        ],
      });
      iv.model[`server${iv.itemList.length - 3}`] = "";
    }
  });
  console.log(formList.value);
};
const delServer = (id: string, id2: string) => {
  formList.value.forEach((iv: any) => {
    if (iv.ref === id) {
      iv.itemList = iv.itemList.filter((iv2: any) => iv2.id !== id2);
    }
  });
};
</script>

<style scoped lang="less">
.index-view {
  width: 100%;
  .el-col {
    display: flex;
    flex-direction: column;
  }
  .col-content-left {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    > img {
      width: 200px;
      height: 40px;
    }
  }
  .col-content-right {
    .add-server-select {
      width: 100%;
      position: relative;
      .add-server-icon {
        cursor: pointer;
        font-size: 25px;
        position: absolute;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
      }
    }
    :deep(.el-form-item) {
      margin-bottom: 10px !important;
    }
    :deep(.el-form-item--label-top .el-form-item__label) {
      margin-bottom: 0px !important;
    }
    .add-type {
      .back-btn-col-del {
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;
        height: 100%;
        .el-icon {
          cursor: pointer;
          font-size: 30px;
          color: #eb7da1;
        }
      }
      .back-btn-col {
        width: 100%;
        height: 40px;
        .back-btn {
          width: 100%;
          height: 100%;
          border-radius: 3px 3px 3px 3px;
          background: #eb7da1;
          color: #ffffff;
          border: 1px solid #eb7da1;
        }
      }
    }
    .footer-btns {
      width: 100%;
      margin-top: 100px;
      .back-btn-col {
        width: 100%;
        height: 40px;
        .back-btn {
          width: 100%;
          height: 100%;
          border: 1px solid #8b68e6;
          border-radius: 3px 3px 3px 3px;
          background: #ffffff;
          color: #8b68e6;
        }
      }
      .sure-btn-col {
        width: 100%;
        height: 40px;
        color: #fff;
        .sure-btn {
          width: 100%;
          height: 100%;
          border: 1px solid #8b68e6;
          border-radius: 3px 3px 3px 3px;
          background: #8b68e6;
          color: #fff;
        }
      }
    }
  }
}
</style>
