import {
    DIC
} from '@/const/dic'
export default {
    labelWidth: 120,
    dicData: DIC,
    submitBtn: false,
    column: [{
            label: "表格宽度",
            prop: "width",
            span: 6,
        }, {
            label: "表格高度",
            prop: "height",
            span: 6,
        }, {
            label: "表单标题宽度",
            prop: "labelWidth",
            span: 6,
        }, {
            label: "操作栏宽度",
            prop: "menuWidth",
            span: 6,
        }, {
            label: "表格字典",
            prop: "dic",
            type: 'select',
            formsolt: true,
            span: 6,
        }, {
            label: "表格边框",
            prop: "border",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "对齐方式",
            prop: "align",
            type: 'select',
            dicData: 'POSTIONDATA',
            span: 6,
        }, {
            label: "斑马条纹",
            prop: "stripe",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "是否显示表头",
            prop: "showHeader",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "表格序号",
            prop: "index",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "表格勾选框",
            prop: "selection",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "表格操作栏",
            prop: "menu",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "行删除按钮",
            prop: "editBtn",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "行编辑按钮",
            prop: "delBtn",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        }, {
            label: "表格分页",
            prop: "page",
            type: 'radio',
            dicData: 'VAILDATA',
            span: 6,
        },

    ]
};