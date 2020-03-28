define({ "api": [
  {
    "type": "post",
    "url": "/admin/goods/add",
    "title": "商品添加",
    "name": "add",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Chinesename",
            "description": "<p>咖啡中文名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Englishname",
            "description": "<p>咖啡英文名.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>咖啡描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "picture",
            "description": "<p>轮播图链接.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>温度 冰：1，热：0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cream",
            "description": "<p>奶油 默认奶油：1 ，无奶油：0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/del",
    "title": "商品删除",
    "name": "del",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/findGoodsByKw",
    "title": "关键字查询",
    "name": "findGoodsByKw",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allCount",
            "description": "<p>查询到的数据总数.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/findGoodsByType",
    "title": "分类查询",
    "name": "findGoodsByType",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allCount",
            "description": "<p>查询到的数据总数.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/getAllInfo",
    "title": "商品列表",
    "name": "getAllInfo",
    "group": "Goods",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/getInfoById",
    "title": "商品查询",
    "name": "getInfoById",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/getInfoByPage",
    "title": "分页查询",
    "name": "getInfoByPage",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的数据列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allCount",
            "description": "<p>查询到的数据总数.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/admin/goods/update",
    "title": "商品更新",
    "name": "update",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Chinesename",
            "description": "<p>咖啡中文名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Englishname",
            "description": "<p>咖啡英文名.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>咖啡描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "picture",
            "description": "<p>轮播图链接.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>温度 冰：1，热：0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cream",
            "description": "<p>奶油 默认奶油：1 ，无奶油：0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/goodsRouter.js",
    "groupTitle": "Goods"
  }
] });