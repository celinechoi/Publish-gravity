const QUERY = '?v=240718';
const imgPath = {
  m_icon: mainPath + 'img/m_icon/',
  arrow1: mainPath + 'img/sinka_icon/',
  drop_icon: mainPath + 'img/sinka_icon/',
  kakusei_icon: mainPath + 'img/kakusei_icon/',
  resource: mainPath + 'img/',
  chara_illust: mainPath + 'img/chara/',
  ability: mainPath + 'img/ability/',
};
const twTag = '코드기아스,パズドラ';
const title = '코드기아스 콜라보';
const eventDate = '09/20(금)10:00~08/05(月)09:59';
const copyright = '&copy;SUNRISE/PROJECT L-GEASS Character Design ©2006-2017 CLAMP・ST';
const copyright2 = '&copy;SUNRISE/PROJECT L-GEASS Character Design ©2006-2017 CLAMP・ST<br>&copy;SUNRISE／PROJECT G-ROZE　Character Design ©2006-2024 CLAMP・ST';
const charaNew = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'];
const evoNew = [];
const evoPt = {
  pt1: {
    id: ['03', '04', '05', '07', '08', '16', '17', '18'],
    btn: ['01', '03', '04'],
  },
  pt2: {
    id: ['01', '02', '09', '10', '11', '12', '13', '14', '15', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
    btn: ['01', '04'],
  },
  pt3: {
    id: ['06'],
    btn: ['01', '03', '05_1', '05_2'],
  },
};
const evoBtn = {
  '01': {
    id: 'btn01',
    name: '進化前',
    img: {
      off: 'btn_chara_01.jpg',
      on: 'btn_chara_01_on.jpg',
    },
  },
  '02': {
    id: 'btn02',
    name: '究極進化',
    img: {
      off: 'btn_chara_02.jpg',
      on: 'btn_chara_02_on.jpg',
    },
  },
  '03': {
    id: 'btn03',
    name: '変身',
    img: {
      off: 'btn_chara_03.jpg',
      on: 'btn_chara_03_on.jpg',
    },
  },
  '04': {
    id: 'btn04',
    name: 'アシスト進化',
    img: {
      off: 'btn_chara_04.jpg',
      on: 'btn_chara_04_on.jpg',
    },
  },
  '05_1': {
    id: 'btn05_1',
    name: 'アシスト進化①',
    img: {
      off: 'btn_chara_05_1.jpg',
      on: 'btn_chara_05_1_on.jpg',
    },
  },
  '05_2': {
    id: 'btn05_2',
    name: 'アシスト進化②',
    img: {
      off: 'btn_chara_05_2.jpg',
      on: 'btn_chara_05_2_on.jpg',
    },
  },
};
const evoSkillList = {
  id: ['11371', '11373', '11423', '11436', '11437'],
  btn: {
    off: 'btn_evo_skill.jpg',
    on: 'btn_evo_skill_on.jpg',
  },
};
const modalNotice = {
  pt1: {
    id: [],
    target: {
      illust: true,
      ability: true,
    },
    content: ``,
  },
};
const initCharaList = {
  charaNew: charaNew,
  evoNew: evoNew,
  evoPt: evoPt,
  evoBtn: evoBtn,
  evoSkillList: evoSkillList,
  modalNotice: modalNotice,
  imgPath: imgPath,
};
const initAbilityList = {
  imgPath: imgPath,
  evoSkillList: evoSkillList,
};
const initEvoList = {
  hideAll: [],
  baseShow: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
  sozaiHide: {
    pt1: {
      id: ['03', '04', '05', '06', '07', '08', '16', '17', '18'],
      evo: ['evo_1'],
    },
  },
  listItemHide: {
    pt1: {
      id: [],
      evo: [],
    },
  },
  notice: {
    pt1: {
      id: ['03', '04', '05', '06', '07', '08', '16', '17', '18'],
      content: `
            <p class="green mb0">【싱크로 각성 解放条件】</p>
        <table class="coin_dungeon_list mt05" style="font-size: 90%; max-width: 620px; width:100%;">
        <tbody>
          <tr>
            <th style="width: 50%; vertical-align: middle;">対象캐릭터</th>
            <th  style="vertical-align: middle;">条件</th>
          </tr>
          <tr>
            <td><img src="#{mainPath}img/m_icon/m11437.png" alt="" class="sync_icon">샤를＆마리안느</td>
            <td>Lv.120<br>スキルLv.最大</td>
          </tr>
        </tbody>
      </table>
      `,
    },
  },
  order: [
    {
      id: '',
      insert: '',
    },
  ],
};

const newTag = '<span class="orange">NEW!</span>';

const dropList = [
  {
    no: 1,
    name: '코드기아스ドロップ',
    chara: 'カレン＆紅蓮可翔式',
    image: '../common/drop/11385.jpg',
  },
];
const bgmList = [
  {
    no: 1,
    name: '코드기아스콜라보のBGMセット',
    chara: 'スザク＆ランスロット',
    video: '../common/bgm/11381-1.mp4',
    poster: '../common/bgm/11381-1_image.jpg',
  },
  {
    no: 2,
    name: '코드기아스콜라보のBGMセット2',
    chara: 'スザク＆ランスロット',
    video: '../common/bgm/11381-2.mp4',
    poster: '../common/bgm/11381-2_image.jpg',
  },
];

const lineup1 = [
  {
    rare: 9,
    text: '９',
    data: `
    魔王と魔女 ルルーシュ＆C.C.<br>
    ロゼ＆アッシュ<br>
    `,
  },
  {
    rare: 8,
    text: '８',
    data: `
    黒の騎士団 ゼロ<br>
    C.C.<br>
    カレン＆紅蓮可翔式<br>
    スザク＆ランスロット<br>
    ユーフェミア・リ・ブリタニア<br>
    シュナイゼル・エル・ブリタニア<br>
    `,
  },
  {
    rare: 7,
    text: '７',
    data: `
    ナナリー・ヴィ・ブリタニア<br>
    ロロ＆ヴィンセント<br>
    藤堂＆斬月<br>
    星刻＆神虎<br>
    V.V.＆ジークフリート<br>
    ビスマルク＆ギャラハッド<br>
    ジノ＆トリスタン<br>
    アーニャ＆モルドレッド<br>
    ルキアーノ＆パーシヴァル<br>
    モニカ＆フローレンス<br>
    コーネリア＆グロースター<br>
    ギルフォード＆グロースター<br>
    ジェレミア＆サザーランド・ジーク<br>
    `,
  },
  {
    rare: 6,
    text: '６',
    data: `
        皇神楽耶<br>
        篠崎咲世子<br>
        扇要<br>
        ヴィレッタ・ヌゥ<br>
        ロイド＆セシル<br>
        ミレイ・アッシュフォード<br>
    `,
  },
];
let lineup2 = [];
lineup2[0] = { ...lineup1[0] };
lineup2[1] = { ...lineup1[1] };
lineup2[2] = { ...lineup1[2] };

let lineup3 = [];
lineup3[0] = { ...lineup1[1] };
lineup3[0].data = `
カレン＆紅蓮可翔式
`;

let lineup4 = [];
lineup4[0] = { ...lineup1[1] };
lineup4[0].data = `
スザク＆ランスロット
`;
let lineup5 = [];
lineup5[0] = { ...lineup1[0] };
lineup5[0].data = `
魔王と魔女 ルルーシュ＆C.C.
`;
const gachaList = {
  g1: {
    name: '코드기아스 에그',
    rate: '1',
    price: '160',
    term: `
    ①09/20(금)10:00~07/29(月)09:59<br>
    ②07/29(月)10:00~08/05(月)09:59
    `,
    setName: `
    ①魔法石1個＋セットK<br>
    ②魔法石1個＋セットA
    `,
    omake: ``,
    list: lineup1,
  },
  g2: {
    name: '★7以上確定 코드기아스 에그',
    rate: '20',
    price: '2,400',
    term: `
    09/20(금)10:00~08/05(月)09:59
    `,
    setName: `
    魔法石20個＋セットU
    `,
    omake: ``,
    list: lineup2,
  },
  g3: {
    name: '確定 カレン＆紅蓮可翔式ガチャ',
    rate: '20',
    price: '2,400',
    term: `
    09/20(금)10:00~08/05(月)09:59
    `,
    setName: `
    魔法石20個＋セットV
    `,
    omake: ``,
    list: lineup3,
  },
  g4: {
    name: '確定 スザク＆ランスロットガチャ',
    rate: '30',
    price: '3,600',
    term: `
      09/20(금)10:00~08/05(月)09:59
      `,
    setName: `
      魔法石30個＋セットC
      `,
    omake: `・${bgmList[1].name}`,
    list: lineup4,
  },
  g5: {
    name: '確定 魔王と魔女 ルルーシュ＆C.C.ガチャ',
    rate: '30',
    price: '3,600',
    term: `
        09/20(금)10:00~08/05(月)09:59
        `,
    setName: `
        魔法石30個＋セットE
        `,
    omake: `・30万モンスターポイント`,
    list: lineup5,
  },
};

const dungeonList = {
  dungeon1: {
    name: ' 코드기아스 반역의 를르슈 初級者向け / 上級者向け',
    term: '04/18(木)10:00~05/06(月)09:59',
  },
  dungeon2: {
    name: '샤를＆마리안느 降臨！',
    term: '04/18(木)10:00~05/06(月)09:59',
  },
  dungeon3: {
    name: '코드기아스콜로세움！',
    term: '04/18(木)10:00~05/06(月)09:59',
  },
  dungeon4: {
    name: '「기아스」称号チャレンジ！',
    term: '04/18(木)10:00~05/06(月)09:59',
  },
  dungeon5: {
    name: ' 콜라보限定のガチアバター등장！',
    term: '04/18(木)10:00~05/06(月)09:59',
  },
};

// Components
const CompBtnEvo = {
  name: 'button-evo',
  props: ['btn', 'btnIndex', 'state'],
  data: function () {
    return {
      path: imgPath,
    };
  },
  methods: {
    chengeFunc: function (e, data, index) {
      this.$emit('change-func', e, data, index);
    },
  },
  template: `
  <li class="c-evo-btn-list__item" @click="chengeFunc($event, state.data, btnIndex)">
    <a href="javascript:void(0)">
      <img :src="path.resource + state.currentBtn[btnIndex]" :alt="btn.name" width="180" height="77" decording="async">
    </a>
  </li>
  `,
};
const CompModalIllust = {
  name: 'modal-illust',
  props: ['state', 'mode', 'evoPt', 'evoBtn', 'modalNotice', 'compId', 'query', 'changeIllust'],
  data: function () {
    return {
      extIllust: '.png',
    };
  },
  components: {
    'button-evo': CompBtnEvo,
  },
  methods: {
    modalClose: function () {
      this.$emit('modal-close');
    },
  },
  computed: {
    currentEvoBtn: function () {
      const evoId = this.state.evo_id;
      const evoPt = this.evoPt;
      let result;
      function evoBtnSelect(obj) {
        let finishFlg = false;
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id') && obj[key].id.includes(evoId)) {
            finishFlg = true;
            result = evoPt[key].btn;
            return;
          } else if (typeof obj[key] === 'object' && finishFlg === false) {
            evoBtnSelect(obj[key]);
          } else {
            return;
          }
        });
      }
      evoBtnSelect(evoPt);
      return result;
    },
    noticeExist: function () {
      const evoId = this.state.evo_id;
      const notice = this.modalNotice;
      let result;
      function noticeSelect(obj) {
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id')) {
            if (obj[key].id.includes(evoId) && obj[key].target.illust) {
              result = obj[key].content;
            }
          } else if (typeof obj[key] === 'object') {
            noticeSelect(obj[key]);
          } else {
            return;
          }
        });
      }
      noticeSelect(notice);

      return result;
    },
    ShowImagePath: function () {
      let result = '';
      if (this.state.currentIllustImg) {
        result = this.state.currentIllustImg + this.query;
      } else {
        result = '';
      }
      return result;
    },
    checkEvoId: function () {
      let result = this.state.evo_id ? true : false;
      return result;
    },
  },
  template: `
  <div :id="'modal-illust-' + compId" :class="['p-modal-illust', checkEvoId? 'p-modal-illust--' + state.evo_id: '']">
    <div class="c-modal-content">
      <div class="p-illust-box">
        <div class="p-illust-box__img">
          <img :src="ShowImagePath" :alt="state.name" width="960" height="690" decoding="async" onmousedown="return false" oncontextmenu="return false" onselectstart="return false">
          <div class="c-modal-close" @click.self="modalClose"><span>✕</span></div>
        </div>
      </div>
      <ul class="c-evo-btn-list" v-if="mode !== 'single' || (mode !== 'single' && !state.noEvo)">
        <template v-for="(pt, index) in currentEvoBtn">
          <button-evo
            :btn="evoBtn[pt]"
            :btn-index= "index"
            :state="state"
            @change-func="changeIllust"
            ></button-evo>
        </template>
      </ul>
      <div class="p-modal-notice" v-html="noticeExist" v-if="!!noticeExist">
      </div>
    </div>
    </template>
  </div>
  `,
};
const CompModalAbillity = {
  props: ['state', 'path', 'evoPt', 'evoBtn', 'modalNotice', 'compId', 'query', 'changeSs'],
  data: function () {
    return {
      evoSkillList: evoSkillList.id,
      esDir: 'evo_skill/',
    };
  },
  components: {
    'button-evo': CompBtnEvo,
  },
  methods: {
    modalClose: function () {
      this.$emit('modal-close');
    },
    toggleEvoSkillShow: function (e, flg) {
      this.$emit('toggle-es-show', e, flg);
    },
  },
  computed: {
    currentEvoBtn: function () {
      const evoId = this.state.evo_id;
      const evoPt = this.evoPt;
      let result;
      function evoBtnSelect(obj) {
        let finishFlg = false;
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id') && obj[key].id.includes(evoId)) {
            finishFlg = true;
            result = evoPt[key].btn;
            return;
          } else if (typeof obj[key] === 'object' && finishFlg === false) {
            evoBtnSelect(obj[key]);
          } else {
            return;
          }
        });
      }
      evoBtnSelect(evoPt);
      return result;
    },
    noticeExist: function () {
      const evoId = this.state.evo_id;
      const notice = this.modalNotice;
      let result;
      function noticeSelect(obj) {
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id')) {
            if (obj[key].id.includes(evoId) && obj[key].target.ability) {
              result = obj[key].content;
            }
          } else if (typeof obj[key] === 'object') {
            noticeSelect(obj[key]);
          } else {
            return;
          }
        });
      }
      noticeSelect(notice);
      return result;
    },
    evoSkillHas: function () {
      let result = false;
      if (!!this.state.id) {
        result = this.evoSkillList.includes(this.state.id);
      }
      return result;
    },
    ShowImagePath: function () {
      let result = '';
      if (this.state.currentSSImg) {
        result = this.state.currentSSImg + this.query;
      } else {
        result = '';
      }
      return result;
    },
    checkEvoId: function () {
      let result = this.state.evo_id ? true : false;
      return result;
    },
  },
  template: `
  <div :id="'modal-ability-' + compId" :class="['p-modal-ability', checkEvoId? 'p-modal-ability--' + state.evo_id: '']">
    <div class="c-modal-content">
      <div class="p-ability-box">
        <div class="p-ability-box__img">
          <img :src="ShowImagePath" decoding="async" :alt="state.name">
          <div class="p-es" v-if="evoSkillHas">
            <div class="p-es__img" v-if="state.evoSkillFlg">
              <img :src="state.currentSSImgPath + esDir + this.state.id + '.jpg' + query" alt="" onmousedown="return false" onselectstart="return false" oncontextmenu="return false">
            </div>
            <a href="javascript:void(0)" class="c-es-btn" style="display: block;">
              <img :src="path.resource + state.currentEvoSkillBtn" alt="진화스킬" @click.self="toggleEvoSkillShow($event, state.evoSkillFlg)">
            </a>
          </div>
          <div class="c-modal-close" @click.self="modalClose"><span>✕</span></div>
        </div>
        <div class="p-ability-box__others">
          <dl class="c-kakusei-list c-kakusei-list--sync" v-if="state.sync_kakuseiFlg">
            <dt><strong style="color: #2ccd57;">싱크로 각성</strong></dt>
            <dd>
              <template v-if="state.sync_kakuseiFlg">
                <ul>
                  <li v-for="items_c in state.sync_kakusei">
                    <img :src="path.kakusei_icon + items_c +'.png'" alt="">
                  </li>
                </ul>
              </template>
              <template v-else>
                <strong>없음</strong>
              </template>
            </dd>
          </dl>
          <dl class="c-kakusei-list" v-else>
            <dt><strong>초 각성</strong></dt>
            <dd>
              <template v-if="state.c_kakuseiFlg">
                <ul>
                  <li v-for="items_c in state.c_kakusei">
                    <img :src="path.kakusei_icon + items_c +'.png'" alt="">
                  </li>
                </ul>
              </template>
              <template v-else>
                <strong>없음</strong>
              </template>
            </dd>
          </dl>
          <dl class="c-leader-skill-txt">
            <dt>리더스킬 대미지 경감 배율</dt>
            <dd>
              <div v-if="!!state.leader_skill" v-html="state.leader_skill"></div>
              <div v-else><strong>없음</strong></div>
            </dd>
          </dl>
        </div>
      </div>
      <ul class="c-evo-btn-list">
        <template v-for="(pt, index) in currentEvoBtn">
          <button-evo
            :btn="evoBtn[pt]"
            :btn-index= "index"
            :state="state"
            @change-func="changeSs"
            ></button-evo>
        </template>
      </ul>
      <div class="p-modal-notice" v-html="noticeExist" v-if="!!noticeExist">
      </div>
    </div>
  </div>
  `,
};
const CompCharaListItem = {
  name: 'chara-list-item',
  props: ['prop', 'itemData'],
  data: function () {
    return {
      path: this.prop['init'].imgPath,
      extTmb: '.png',
      btnImg: 'btn-ability.png',
    };
  },
  methods: {
    charaNewCheck: function (data) {
      return this.prop['init'].charaNew.includes(data);
    },
    evoNewCheck: function (data) {
      return this.prop['init'].evoNew.includes(data);
    },
    modalIllust: function (data, btn) {
      this.$emit('modal-graphic', data, btn);
    },
    modalAbility: function (data, btn) {
      this.$emit('modal-ss', data, btn);
    },
  },
  computed: {
    evoBtnPick: function () {
      const currentId = this.itemData.id;
      const evoPt = this.prop['init'].evoPt;
      const evoBtn = this.prop['init'].evoBtn;
      let pattern;
      let result = [];
      Object.keys(evoPt).forEach(function (key) {
        if (evoPt[key].id.includes(currentId)) {
          return (pattern = evoPt[key].btn);
        }
      });
      pattern.forEach(function (val, index) {
        result.push(evoBtn[val]);
      });
      return result;
    },
    evoBtnImgList: function () {
      let result = [];
      let pickEvoBtn = this.evoBtnPick;
      pickEvoBtn.forEach(function (val, index) {
        result.push(val.img);
      });
      return result;
    },
  },
  template: `
  <li :class="['p-chara-list__item', {'is-new': charaNewCheck(itemData.id)}, {'is-evo-new': evoNewCheck(itemData.id)}]">
    <a href="" class="p-chara-list__tmb" @click.prevent="modalIllust(itemData, evoBtnImgList)">
      <img :src="path.chara_illust + 'thum_' + itemData.id + extTmb" :alt="itemData.name" width="360" height="440" decording="async" class="thum">
    </a>
    <div class="p-chara-list__btn">
      <a href="" @click.prevent="modalAbility(itemData, evoBtnImgList)">
        <img :src="path.resource + btnImg" alt="자세히보기" width="270" height="80" decording="async" class="btn">
      </a>
    </div>
  </li>
  `,
};
const CompCharaList = {
  // v2.1.1
  name: 'chara-list',
  props: {
    prop: {
      type: Object,
      default: function () {
        return {};
      },
      required: true,
    },
    mode: {
      type: String,
      default: '',
    },
    ssPath: {
      type: String,
      default: '',
    },
    ssPathNest: {
      type: Object,
      default: function () {
        return {};
      },
    },
    hideItem: {
      type: Array,
      default: function () {
        return [];
      },
    },
    uid: {
      type: Number,
    },
  },
  data: function () {
    return {
      modalFlg: false,
      state: {
        illust: {
          id: null,
          name: null,
          leader_skill: null,
          evo_id: null,
          illust: null,
          currentIllust: null,
          currentIllustImg: null,
          currentBtnList: null,
          currentBtn: null,
          data: null,
          noEvo: null,
        },
        ability: {
          id: null,
          name: null,
          leader_skill: null,
          evo_id: null,
          ss: null,
          currentSS: null,
          currentSSImg: null,
          currentSSImgPath: '',
          currentBtnList: null,
          currentBtn: null,
          data: null,
          noEvo: null,
          evoSkillFlg: false,
          currentEvoSkillBtn: evoSkillList.btn.off,
          dataSsPath: null,
          dataSsPathNest: {},
        },
      },
      query: QUERY,
    };
  },
  components: {
    'chara-list-item': CompCharaListItem,
    'modal-illust': CompModalIllust,
    'modal-ability': CompModalAbillity,
  },
  methods: {
    initialize: function () {
      let $target = $('#chara-list-wrapper-' + this.compId + ' img');
      $target.attr('onmousedown', 'return false');
      $target.attr('onselectstart', 'return false');
      $target.attr('oncontextmenu', 'return false');
    },
    preloadBtnImg: function (data, path) {
      const regImg = /.jpg|.png|.gif/;
      const imgPath = path;

      function preloadObj(obj) {
        Object.keys(obj).forEach(function (key) {
          if (typeof obj[key] === 'object') {
            preloadObj(obj[key]);
          } else if (regImg.test(obj[key])) {
            let elemImg = document.createElement('img');
            elemImg.src = imgPath + obj[key];
          } else {
            return;
          }
        });
      }

      preloadObj(data);
    },
    checkFlexGap: function () {
      var flex = document.createElement('div');
      flex.style.display = 'flex';
      flex.style.flexDirection = 'column';
      flex.style.rowGap = '1px';

      flex.appendChild(document.createElement('div'));
      flex.appendChild(document.createElement('div'));

      document.body.appendChild(flex);
      var isSupported = flex.scrollHeight === 1;
      flex.parentNode.removeChild(flex);
      return isSupported;
    },
    modalStatusUpdate: function (state, data, btn, path, ext) {
      let category;
      if ('illust' in state) {
        category = 'illust';
      } else if ('ss' in state) {
        category = 'ability';
      }
      let status = state;
      let data_evo1 = data.evo.evo_1;
      let dataFirstId = data_evo1.baseID;
      let currentBtnList = [];
      btn.forEach(function (val, index) {
        index !== 0 ? currentBtnList.push(val.off) : currentBtnList.push(val.on);
      });
      const existEvo = dataFirstId === '' || dataFirstId === undefined;
      if (existEvo) {
        status.noEvo = true;
        status.id = data.ss[1];
        status.name = data.name;
      } else {
        status.noEvo = false;
        status.id = dataFirstId;
        status.name = data_evo1.baseName;
      }
      switch (category) {
        case 'illust':
          status.illust = data.illust;
          status.currentIllust = data.illust[1];
          status.currentIllustImg = path + data.illust[1] + ext;
          break;
        case 'ability':
          status.ss = data.ss;
          status.currentSS = existEvo ? data.ss[1] : dataFirstId;
          let pathInit;
          let monId = status.currentSS;
          let nestDir = '';
          function searchNestDir(obj) {
            Object.keys(obj).forEach(function (key) {
              if (obj[key].includes(monId)) {
                nestDir = key + '/';
                return;
              } else if (typeof obj[key] === 'object') {
                searchNestDir(obj[key]);
              } else {
                return;
              }
            });
          }
          if (Object.keys(this.ssPathNest).length !== 0) {
            status.dataSsPathNest = this.ssPathNest;
            searchNestDir(this.ssPathNest);
          }
          if (!!this.ssPath) {
            status.dataSsPath = this.ssPath;
            pathInit = nestDir ? this.ssPath + nestDir : this.ssPath;
          } else {
            pathInit = nestDir ? path + nestDir : path;
          }
          status.currentSSImg = existEvo ? pathInit + data.ss[1] + ext : pathInit + dataFirstId + ext;
          status.currentSSImgPath = pathInit;
          break;
        default:
          break;
      }

      status.evo_id = data.id;
      if (data_evo1.id === '') {
        status.c_kakuseiFlg = data_evo1.c_kakuseiFlg || false;
        status.c_kakusei = data_evo1.c_kakusei || false;
        status.sync_kakuseiFlg = data_evo1.sync_kakuseiFlg || false;
        status.sync_kakusei = data_evo1.sync_kakusei || false;
      } else {
        status.c_kakuseiFlg = data_evo1.base_c_kakuseiFlg || false;
        status.c_kakusei = data_evo1.base_c_kakusei || false;
        status.sync_kakuseiFlg = data_evo1.base_sync_kakuseiFlg || false;
        status.sync_kakusei = data_evo1.base_sync_kakusei || false;
      }
      status.leader_skill = data.leader_skill[0] ? data.leader_skill[1] : false;
      status.currentBtnList = btn;
      status.currentBtn = currentBtnList;
      status.data = data;
    },
    modalFunc: function (state, path, ext) {
      let _this = this;
      const status = state;
      let category;
      if ('illust' in state) {
        category = 'illust';
      } else if ('ss' in state) {
        category = 'ability';
      }
      const evoBtnClass = '.c-evo-btn-list__item';
      let targetId;
      let imgDivClass;
      let dataImgName;
      switch (category) {
        case 'illust':
          targetId = '#modal-illust-' + this.compId;
          imgDivClass = '.p-illust-box__img';
          dataImgName = status.illust;
          break;
        case 'ability':
          targetId = '#modal-ability-' + this.compId;
          imgDivClass = '.p-ability-box__img';
          dataImgName = status.ss;
          break;
        default:
          break;
      }

      const elemFirstImg = document.createElement('img');
      elemFirstImg.src = path + dataImgName[1] + ext + this.query;

      $(targetId + ' ' + evoBtnClass).removeClass('is-active');
      $(targetId + ' ' + evoBtnClass + ':first-child').addClass('is-active');

      $(targetId + ' ' + imgDivClass + ' img').css({ visibility: 'hidden' });
      $(targetId + ' ' + '.c-modal-content').fadeIn(500);
      $('#overlay-' + this.compId).fadeIn(500);
      this.modalFlg = true;

      elemFirstImg.addEventListener(
        'load',
        function () {
          $(targetId + ' ' + imgDivClass + ' img').css({ visibility: 'visible' });
          if (_this.mode === 'single' && category === 'illust') {
            return;
          } else {
            for (let i = 2; i < dataImgName.length; i++) {
              let elemImg = document.createElement('img');
              elemImg.src = path + dataImgName[i] + ext + _this.query;
            }
          }
        },
        false
      );
    },
    modalIllust: function (data, btn) {
      if (this.modalFlg === false) {
        let _this = this;
        let status = this.state.illust;
        const path = this.prop['init'].imgPath.chara_illust;
        const extension = '.png';
        this.modalStatusUpdate(status, data, btn, path, extension);

        this.$nextTick(function () {
          _this.modalFunc(status, path, extension);
        });
      }
    },
    modalAbility: function (data, btn) {
      if (this.modalFlg === false) {
        let _this = this;
        let status = this.state.ability;
        const path = this.prop['init'].imgPath.ability;
        const extension = '.jpg';
        this.modalStatusUpdate(status, data, btn, path, extension);

        this.$nextTick(function () {
          _this.modalFunc(status, path, extension);
        });
      }
    },
    changeStateUpdate: function (event, state, data, path, ext) {
      const e = event;
      const status = state;
      let category;
      let data_evo1 = data.evo.evo_1;
      if ('illust' in state) {
        category = 'illust';
      } else if ('ss' in state) {
        category = 'ability';
      }
      let btnNum = $(e.currentTarget).index();
      let evoProp = 'evo_' + btnNum;

      status.id = evoProp !== 'evo_0' ? data.evo[evoProp].id : data_evo1.baseID;
      status.name = evoProp !== 'evo_0' ? data.evo[evoProp].name : data_evo1.baseName;
      status.c_kakuseiFlg = evoProp !== 'evo_0' ? data.evo[evoProp].c_kakuseiFlg : data_evo1.base_c_kakuseiFlg;
      if (status.c_kakuseiFlg) {
        status.c_kakusei = evoProp !== 'evo_0' ? data.evo[evoProp].c_kakusei : data_evo1.base_c_kakusei;
      } else {
        status.c_kakusei = false;
      }
      status.sync_kakuseiFlg = evoProp !== 'evo_0' ? data.evo[evoProp].sync_kakuseiFlg : data_evo1.base_sync_kakuseiFlg;
      if (status.sync_kakuseiFlg) {
        status.sync_kakusei = evoProp !== 'evo_0' ? data.evo[evoProp].sync_kakusei : data_evo1.base_sync_kakusei;
      } else {
        status.sync_kakusei = false;
      }
      if (evoProp !== 'evo_0') {
        status.leader_skill = data.evo[evoProp].leader_skill[0] ? data.evo[evoProp].leader_skill[1] : false;
      } else {
        status.leader_skill = data.leader_skill[0] ? data.leader_skill[1] : false;
      }
      switch (category) {
        case 'illust':
          status.currentIllust = evoProp !== 'evo_0' ? data.illust[btnNum + 1] : data.illust[1];
          status.currentIllustImg = evoProp !== 'evo_0' ? path + data.illust[btnNum + 1] + ext : path + data.illust[1] + ext;
          break;
        case 'ability':
          status.currentSS = evoProp !== 'evo_0' ? data.evo[evoProp].id : data_evo1.baseID;
          let pathInit;
          let monId = status.currentSS;
          let nestDir = '';
          function searchNestDir(obj) {
            Object.keys(obj).forEach(function (key) {
              if (obj[key].includes(monId)) {
                nestDir = key + '/';
                return;
              } else if (typeof obj[key] === 'object') {
                searchNestDir(obj[key]);
              } else {
                return;
              }
            });
          }
          if (Object.keys(status.dataSsPathNest).length !== 0) {
            searchNestDir(status.dataSsPathNest);
          }
          if (!!status.dataSsPath) {
            pathInit = nestDir ? status.dataSsPath + nestDir : status.dataSsPath;
          } else {
            pathInit = nestDir ? path + nestDir : path;
          }
          status.currentSSImg = evoProp !== 'evo_0' ? pathInit + data.evo[evoProp].id + ext : pathInit + data_evo1.baseID + ext;
          status.currentSSImgPath = pathInit;
          break;
        default:
          break;
      }

      let currentBtn = [];
      status.currentBtnList.forEach(function (val) {
        currentBtn.push(val.off);
      });
      const selectedBtn = status.currentBtnList[btnNum].on;
      currentBtn[btnNum] = selectedBtn;
      status.currentBtn = currentBtn;
    },
    changeFunc: function (e, target1, target2) {
      target1.removeClass('is-active');
      $(e.currentTarget).addClass('is-active');
      target2.stop().css('opacity', '0').animate({ opacity: '1' }, 500);
    },
    changeIllust: function (e, data, index) {
      let _this = this;
      let status = this.state.illust;
      let event = e;
      const path = imgPath.chara_illust;
      const extension = '.png';
      if (!$(e.currentTarget).hasClass('is-active')) {
        this.changeStateUpdate(e, status, data, path, extension);

        this.$nextTick(function () {
          _this.changeFunc(event, $('#modal-illust-' + this.compId + ' .c-evo-btn-list__item'), $('#modal-illust-' + this.compId + ' .p-illust-box__img img'));
        });
      }
    },
    changeSS: function (e, data, index) {
      let _this = this;
      let status = this.state.ability;
      let event = e;
      const path = this.prop['init'].imgPath.ability;
      const extension = '.jpg';
      if (!$(e.currentTarget).hasClass('is-active')) {
        this.changeStateUpdate(e, status, data, path, extension);

        this.$nextTick(function () {
          _this.changeFunc(event, $('#modal-ability-' + this.compId + ' .c-evo-btn-list__item'), $('#modal-ability-' + this.compId + ' .p-ability-box__img img'));
        });
      }
    },
    toggleEvoSkillShow: function (e, flg) {
      const flag = !flg;
      const $parent = $(e.currentTarget).parent();
      this.state.ability.currentEvoSkillBtn = flag ? evoSkillList.btn.on : evoSkillList.btn.off;
      this.state.ability.evoSkillFlg = flag;
      $parent.toggleClass('is-active');
    },
    charaListModalClose: function () {
      if (this.modalFlg === true) {
        $('.c-modal-content').fadeOut(500);
        $('#overlay-' + this.compId).fadeOut(500);
        $('#modal-ability-' + this.compId + ' .c-es-btn').removeClass('is-active');
        this.modalFlg = false;
        this.state.ability.evoSkillFlg = false;
        this.state.ability.currentEvoSkillBtn = evoSkillList.btn.off;
        this.state.ability.dataSsPath = null;
        this.state.ability.dataSsPathNest = {};
      }
    },
  },
  computed: {
    compId: function () {
      var max = 9999,
        min = 1;
      let result = this.uid ? this.uid : Math.floor(Math.random() * (max + 1 - min) + min);
      return result;
    },
  },
  mounted: function () {
    let _this = this;
    $(window).on('load', function () {
      _this.initialize();
      _this.preloadBtnImg(_this.prop['init'].evoBtn, _this.prop['init'].imgPath.resource);
      _this.preloadBtnImg(_this.prop['init'].evoSkillList.btn, _this.prop['init'].imgPath.resource);
    });
  },
  created: function () {
    if (!this.checkFlexGap()) {
      document.documentElement.classList.add('no-flexbox-gap');
    }
  },
  template: `
  <div :id="'chara-list-wrapper-' + compId">
    <ul :id="'chara-list-' + compId" class="p-chara-list">
      <template v-for="items in prop.list_data">
        <chara-list-item
        :prop="prop"
        :item-data="items"
        @modal-graphic="modalIllust"
        @modal-ss="modalAbility"
        v-if="!hideItem.includes(items.id)"></chara-list-item>
      </template>
    </ul>
    <modal-illust
    :state="state.illust"
    :mode="mode"
    :evo-pt="prop['init'].evoPt"
    :evo-btn="prop['init'].evoBtn"
    :modal-notice="prop['init'].modalNotice"
    :comp-id="compId"
    :query="query"
    :change-illust="changeIllust"
    @modal-close="charaListModalClose"></modal-illust>

    <modal-ability
    :state="state.ability"
    :path="prop['init'].imgPath"
    :evo-pt="prop['init'].evoPt"
    :evo-btn="prop['init'].evoBtn"
    :modal-notice="prop['init'].modalNotice"
    :comp-id="compId"
    :query="query"
    :change-ss="changeSS"
    @modal-close="charaListModalClose"
    @toggle-es-show="toggleEvoSkillShow"></modal-ability>

    <div :id="'overlay-' + compId" class="c-overlay" @click.self="charaListModalClose"></div>
  </div>
  `,
};
const CompAbilityItem = {
  // v1.1.1
  props: ['prop', 'ssPath', 'ssPathNest'],
  data: function () {
    return {
      path: this.prop['init']['imgPath'],
      esDir: 'evo_skill/',
      tableW: '100%',
      tableMaxW: '290px',
      tableStyle: {
        width: '100%',
        'max-width': '290px',
        'font-size': '100%',
      },
      query: QUERY,
    };
  },
  methods: {
    ssPathSelect: function (prop = '') {
      let result;
      let nestDir = '';
      if (!!this.ssPathNest) {
        nestDir = this.ssPathNest + '/';
      }
      if (!!this.ssPath) {
        switch (prop) {
          case 'es':
            result = nestDir ? this.ssPath + nestDir + this.esDir : this.ssPath + this.esDir;
            break;
          default:
            result = nestDir ? this.ssPath + nestDir : this.ssPath;
            break;
        }
      } else {
        switch (prop) {
          case 'es':
            result = nestDir ? this.path.ability + nestDir + this.esDir : this.path.ability + this.esDir;
            break;
          default:
            result = nestDir ? this.path.ability + nestDir : this.path.ability;
            break;
        }
      }
      return result;
    },
  },
  computed: {
    monsterStatus: function () {
      let listData = this.prop.list_data || false;
      let evoNum = this.prop.list_evo || '';
      let listId = this.prop.list_id || '';
      let monster;
      let flagChoKakusei, choKakusei, flagSyncKakusei, syncKakusei;
      let result;
      if (listData && listId) {
        monster = listData.find((e) => e.id === listId);
      } else {
        return false;
      }
      if (!evoNum) {
        if (monster.evo.evo_1.id === '') {
          flagChoKakusei = monster.evo.evo_1.c_kakuseiFlg || false;
          flagSyncKakusei = monster.evo.evo_1.sync_kakuseiFlg || false;
          choKakusei = monster.evo.evo_1.c_kakusei || false;
          syncKakusei = monster.evo.evo_1.sync_kakusei || false;
        } else {
          flagChoKakusei = monster.evo.evo_1.base_c_kakuseiFlg || false;
          flagSyncKakusei = monster.evo.evo_1.base_sync_kakuseiFlg || false;
          choKakusei = monster.evo.evo_1.base_c_kakusei || false;
          syncKakusei = monster.evo.evo_1.base_sync_kakusei || false;
        }
        result = {
          id: monster.ss[1] || '',
          name: monster.name || '',
          c_kakuseiFlg: flagChoKakusei,
          c_kakusei: choKakusei,
          sync_kakuseiFlg: flagSyncKakusei,
          sync_kakusei: syncKakusei,
          leader_skill: monster.leader_skill || [],
        };
      } else {
        result = monster.evo[evoNum];
      }
      return result;
    },
    monsterSS: function () {
      if (this.monsterStatus) {
        return {
          srcSS: this.ssPathSelect() + this.monsterStatus.id + '.jpg' + this.query,
          name: this.monsterStatus.name,
        };
      } else {
        return '';
      }
    },
    checkNameHide: function () {
      let result = this.prop.name_hide || false;
      return result;
    },
  },
  template: `
  <div v-if="monsterStatus">
    <p class="mb0" v-if="checkNameHide === false">
      <span class="subtit_orange">{{ monsterSS.name }}</span>
    </p>
    <img :src="monsterSS.srcSS" :alt="monsterSS.name" decording="async" class="screen_shot mb0" onmousedown="return false" onselectstart="return false">
    <div>
      <table class="coin_dungeon_list mt05 mb0" :style="[tableStyle]" v-if="monsterStatus.sync_kakuseiFlg === true">
        <tbody>
          <tr>
            <th style="border: 1px solid #4c4541; vertical-align: bottom; background-color: #1a493c;" :colspan="monsterStatus.sync_kakusei.length" class="center chokakusei_head">싱크로 각성</th>
          </tr>
          <tr>
            <td class="center" v-for="items_s in monsterStatus.sync_kakusei">
              <img :src="path.kakusei_icon + items_s +'.png' + query" alt="" decording="async" class="icon_kakusei">
            </td>
          </tr>
        </tbody>
      </table>
      <table class="coin_dungeon_list mt05 mb0" :style="[tableStyle]" v-if="monsterStatus.c_kakuseiFlg === true">
        <tbody>
          <tr>
            <th style="border: 1px solid #4c4541; vertical-align: bottom; background-color: #434343;" :colspan="monsterStatus.c_kakusei.length" class="center chokakusei_head">초 각성</th>
          </tr>
          <tr>
            <td class="center" v-for="items_c in monsterStatus.c_kakusei">
              <img :src="path.kakusei_icon + items_c +'.png' + query" alt="" decording="async" class="icon_kakusei">
            </td>
          </tr>
        </tbody>
      </table>
      <table class="coin_dungeon_list mt0 mb0" :style="[tableStyle]" v-if="prop.init.evoSkillList.id.includes(monsterStatus.id)">
        <tbody>
          <tr>
            <th style="border: 1px solid #4c4541; vertical-align: bottom; background-color: #434343;" class="center chokakusei_head">진화스킬</th>
          </tr>
          <tr>
            <td>
              <span>
                <img :src="ssPathSelect('es') + monsterStatus.id + '.jpg' + query" alt="" decording="async" style="width: 100%; padding: 5px; box-sizing: border-box;">
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="monster_list mt0" :style="[tableStyle]" v-if="monsterStatus.leader_skill[0] === true">
        <tbody>
          <tr>
            <th class="center chokakusei_head" style="width: 100%; padding: 0; border: 1px solid #4c4541; vertical-align: bottom; background-color: #434343;"><span style="font-weight: bold; font-size: 100%; line-height: 2;">리더스킬 대미지 경감 배율</span></th>
          </tr>
          <tr>
            <td class="center" v-html="monsterStatus.leader_skill[1]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
};
const CompModalSS = {
  props: ['state'],
  data: function () {
    return {
      path: imgPath,
    };
  },
  methods: {
    clickEvent1: function () {
      this.$emit('modal-close');
    },
  },
  template: `
  <div id="modal-ss">
    <div class="overlay" @click.self="clickEvent1"></div>
    <div class="modal-content">
      <div class="modal-ability">
        <table class="monster_list">
          <tbody>
            <tr>
              <td>
                <span class="modal-open"><img :src="state.currentModalImg" alt="" width="100%" onmousedown="return false" onselectstart="return false"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="text-align: center;">
        <a class="modal-close btn_close" @click.prevent="clickEvent1">
          <strong class="modal_close_btn">× 閉じる</strong>
        </a>
      </div>
    </div>
  </div>
  `,
};
const CompSozaiList = {
  name: 'sozai-list',
  props: ['itemData', 'itemDataEvo', 'imgPath'],
  data: function () {
    return {};
  },
  template: `
  <table class="sozai_list">
    <tbody>
      <tr>
        <th colspan="3">
          <p style="float: left;">{{ itemDataEvo.baseName }}</p>
          <p style="float: right;">{{ itemDataEvo.name }}</p>
        </th>
      </tr>
      <tr>
        <td class="monster_icon"><img :src="imgPath.m_icon + 'm' + itemDataEvo.baseID +'.png'" alt="" decoding="async"></td>
        <td>
          <div class="txt_sozai">
            <template v-for="(sozai, index) in itemDataEvo.material">
              <template v-if="index === 0"><span style="display: inline-block;" v-html="sozai[1]"></span></template>
              <template v-else-if="sozai[1] === ''"></template>
              <template v-else>、<span style="display: inline-block;" v-html="sozai[1]"></span></template>
            </template>
          </div>
          <ul class="sozai">
            <template v-for="(sozai, index) in itemDataEvo.material">
              <template v-if="index === 0">
                <li><img :src="imgPath.arrow1 + 'arrow1.png'" alt="" decoding="async"></li>
                <li class="sozai_icon"><img :src="imgPath.m_icon + 'm' + sozai[0] +'.png'" alt="" decoding="async"></li>
              </template>
              <template v-else-if="index === 4">
                <li class="sozai_icon">＋<img :src="imgPath.m_icon + 'm' + sozai[0] +'.png'" alt="" decoding="async"></li>
                <li><img :src="imgPath.arrow1 + 'arrow1.png'" alt="" decoding="async"></li>
              </template>
              <template v-else>
                <li class="sozai_icon">＋<img :src="imgPath.m_icon + 'm' + sozai[0] +'.png'" alt="" decoding="async"></li>
              </template>
            </template>
          </ul>
        </td>
        <td class="monster_icon"><img :src="imgPath.m_icon + 'm' + itemDataEvo.id +'.png'" alt="" decoding="async"></td>
      </tr>
    </tbody>
  </table>
  `,
};
const CompEvoListItem = {
  name: 'evo-list-item',
  props: ['itemData', 'itemDataEvo', 'itemDataEvoId', 'itemDataLeaderSkill', 'itemDataChoKakuseiFlg', 'itemDataChoKakusei', 'itemDataSyncKakuseiFlg', 'itemDataSyncKakusei', 'itemSsPath', 'itemSsPathNest', 'imgPath'],
  data: function () {
    return {
      path: imgPath,
      items_e: this.itemDataEvo,
      monID: this.itemDataEvoId,
      leaderSkill: this.itemDataLeaderSkill,
      c_kakuseiFlg: this.itemDataChoKakuseiFlg,
      c_kakusei: this.itemDataChoKakusei,
      sync_kakuseiFlg: this.itemDataSyncKakuseiFlg,
      sync_kakusei: this.itemDataSyncKakusei,
      evoSkillMon: evoSkillList.id,
      esDir: 'evo_skill/',
      query: QUERY,
    };
  },
  methods: {
    clickEvent1: function (e) {
      this.$emit('modal-ss', e);
    },
    ssPathSelect: function (prop, id) {
      let result;
      let monId = id;
      let nestDir = '';
      function searchNestDir(obj) {
        Object.keys(obj).forEach(function (key) {
          if (obj[key].includes(monId)) {
            nestDir = key + '/';
            return;
          } else if (typeof obj[key] === 'object') {
            searchNestDir(obj[key]);
          } else {
            return;
          }
        });
      }
      if (!!this.itemSsPathNest) {
        searchNestDir(this.itemSsPathNest);
      }
      if (!!this.itemSsPath) {
        switch (prop) {
          case 'es':
            result = nestDir ? this.itemSsPath + nestDir + this.esDir : this.itemSsPath + this.esDir;
            break;
          default:
            result = nestDir ? this.itemSsPath + nestDir : this.itemSsPath;
            break;
        }
      } else {
        switch (prop) {
          case 'es':
            result = nestDir ? this.path.ability + nestDir + this.esDir : this.path.ability + this.esDir;
            break;
          default:
            result = nestDir ? this.path.ability + nestDir : this.path.ability;
            break;
        }
      }
      return result;
    },
  },
  template: `
  <li v-if="monID">
    <span class="modal-open"><img :src="ssPathSelect('', itemData.id) + monID + '.jpg' + query" alt="" decording="async" @click.self="clickEvent1($event)"></span>
    <table v-if="sync_kakuseiFlg === true">
      <tr>
        <th style="border: 1px solid #4c4541; vertical-align: bottom; background-color: #1a493c;" :colspan="sync_kakusei.length" class="center chokakusei_head">싱크로 각성</th>
      </tr>
      <tr>
        <td class="center" v-for="items_s in sync_kakusei">
          <img :src="imgPath.kakusei_icon + items_s +'.png'" alt="" decording="async" class="icon_kakusei">
        </td>
      </tr>
    </table>
    <table v-if="c_kakuseiFlg === true">
      <tr>
        <th style="border: 1px solid #4c4541; vertical-align: bottom; background-color: #434343;" :colspan="c_kakusei.length" class="center chokakusei_head">초 각성</th>
      </tr>
      <tr>
        <td class="center" v-for="items_c in c_kakusei">
          <img :src="imgPath.kakusei_icon + items_c +'.png'" alt="" decording="async" class="icon_kakusei">
        </td>
      </tr>
    </table>
    <table v-if="evoSkillMon.includes(monID)">
      <tr>
        <th style="border: 1px solid #4c4541; vertical-align: bottom; background-color: #434343;" class="center chokakusei_head">진화스킬</th>
      </tr>
      <tr>
        <td class="modal-open">
        <span>
          <img :src="ssPathSelect('es', itemData.id) + monID + '.jpg' + query" alt="" decording="async" style="width: 100%; padding: 5px; box-sizing: border-box;" @click.self="clickEvent1($event)">
        </span>
        </td>
      </tr>
    </table>
    <table class="monster_list" style="width: 100%; margin: 0;" v-if="leaderSkill[0] === true">
      <tr>
        <th class="center chokakusei_head" style="width: 100%; padding: 0; border: 1px solid #4c4541; vertical-align: bottom; background-color: #434343;"><span style="font-weight: bold; font-size: 100%; line-height: 2;">리더스킬 대미지 경감 배율</span></th>
      </tr>
      <tr>
        <td class="center" v-html="leaderSkill[1]"></td>
      </tr>
    </table>
  </li>
  `,
};
const CompEvoList = {
  // v1.1.0
  props: ['listData', 'initData', 'ssPath', 'ssPathNest', 'addHeading', 'func1'],
  data: function () {
    return {
      path: imgPath,
      init: this.initData,
    };
  },
  components: {
    'sozai-list': CompSozaiList,
    'evo-list-item': CompEvoListItem,
  },
  methods: {
    checkSozaiHide: function (id, index) {
      let obj = this.init.sozaiHide;
      let result = true;
      function checkFunc(obj) {
        let finishFlg = false;
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id') && obj[key].id.includes(id)) {
            if (obj[key].evo.includes(index)) {
              finishFlg = true;
              result = false;
              return;
            } else {
              return;
            }
          } else if (typeof obj[key] === 'object' && finishFlg === false) {
            checkFunc(obj[key]);
          } else {
            return;
          }
        });
      }
      checkFunc(obj);
      return result;
    },
    checkBaseShow: function (id) {
      return this.init.baseShow.includes(id);
    },
    checkItemShow: function (id, i) {
      const charaId = id;
      const hideItem = this.init.listItemHide;
      let result;
      let answer;
      function hideItemSelect(obj) {
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id') && obj[key].id.includes(charaId)) {
            result = obj[key].evo;
            return;
          } else if (typeof obj[key] === 'object') {
            hideItemSelect(obj[key]);
          } else {
            return;
          }
        });
      }
      hideItemSelect(hideItem);

      if (!!result && Object.values(result).includes(i)) {
        answer = false;
      } else if (!!result) {
        answer = true;
      } else {
        answer = true;
      }

      return answer;
    },
    noticeExist: function (id) {
      const charaId = id;
      const notice = this.init.notice;
      let result;
      function noticeSelect(obj) {
        Object.keys(obj).forEach(function (key) {
          if (obj[key].hasOwnProperty('id') && obj[key].id.includes(charaId)) {
            result = obj[key].content;
            return;
          } else if (typeof obj[key] === 'object') {
            noticeSelect(obj[key]);
          } else {
            return;
          }
        });
      }
      noticeSelect(notice);
      return result;
    },
    listDataInit: function () {
      let data = this.listData ? [...this.listData] : [];
      let sortList = this.init.order;
      let dataLen = data.length;

      if (dataLen !== 0) {
        sortList.forEach(function (elem, index) {
          if (elem.id !== '') {
            let tmpDataIndex = data.findIndex((e) => e.id === elem.id);
            let tempData = data.splice(tmpDataIndex, 1);
            let tmpInsertIndex = data.findIndex((e) => e.id === elem.insert);

            data.splice(tmpInsertIndex, 0, tempData[0]);
          }
        });
      }

      return data;
    },
  },
  template: `
  <div class="mt20">
    <template v-for="items in listDataInit()">
      <template v-if="!init.hideAll.includes(items.id)">
        <slot name="heading" v-if="items.id === addHeading"></slot>
        <template v-if="items.evo.evo_1.id">
          <template v-for="(items_e, index) in items.evo">
            <sozai-list
              :item-data="items"
              :item-data-evo="items_e"
              :img-path="path"
              v-if="checkSozaiHide(items.id, index)"
            ></sozai-list>
          </template>
          <div class="list_ability_wrap mb20">
            <ul class="list_c_kakusei" :id="'thumb-'+ items.id">
              <evo-list-item
                :item-data="items"
                :item-data-evo="items.evo['evo_1']"
                :item-data-evo-id="items.evo['evo_1'].baseID"
                :item-data-leader-skill="items.leader_skill"
                :item-data-cho-kakusei-flg="items.evo['evo_1'].base_c_kakuseiFlg"
                :item-data-cho-kakusei="items.evo['evo_1'].base_c_kakusei"
                :item-data-sync-kakusei-flg="items.evo['evo_1'].base_sync_kakuseiFlg"
                :item-data-sync-kakusei="items.evo['evo_1'].base_sync_kakusei"
                :item-ss-path="ssPath"
                :item-ss-path-nest="ssPathNest"
                :img-path="path"
                @modal-ss="func1"
                v-if="checkBaseShow(items.id)"
              ></evo-list-item>
              <template v-for="(items_e, index) in items.evo">
                <evo-list-item
                  :item-data="items"
                  :item-data-evo="items_e"
                  :item-data-evo-id="items_e.id"
                  :item-data-leader-skill="items_e.leader_skill"
                  :item-data-cho-kakusei-flg="items_e.c_kakuseiFlg"
                  :item-data-cho-kakusei="items_e.c_kakusei"
                  :item-data-sync-kakusei-flg="items_e.sync_kakuseiFlg"
                  :item-data-sync-kakusei="items_e.sync_kakusei"
                  :item-ss-path="ssPath"
                  :item-ss-path-nest="ssPathNest"
                  :img-path="path"
                  @modal-ss="func1"
                  v-if="checkItemShow(items.id, index)"
                ></evo-list-item>
              </template>
            </ul>
          </div>
          <div class="mb20" v-html="noticeExist(items.id)" v-if="!!noticeExist(items.id)"></div>
        </template>
      </template>
    </template>
  </div>
  `,
};
const CompDrop = {
  // v1.0.1
  props: ['prop'],
  template: `
  <div>
    <p>「{{ prop.chara }}」を初めて入手した時、「{{ prop.name }}」が解放されます。</p>
    <img :src="prop.image" alt="" class="screen_shot">
  </div>
  `,
};
const CompBgm = {
  // v1.0.0
  props: ['prop', 'bgmOnly'],
  template: `
  <div>
    <p v-if="!bgmOnly">「{{ prop.chara }}」を初めて入手した時、「{{ prop.name }}」が解放されます。<br>
      ※音声が流れますのでご注意ください。</p>
    <video :src="prop.video" :poster="prop.poster" controls controlsList="nodownload" oncontextmenu="return false;" playsinline muted class="mt20 screen_shot" style="max-width:300px; width: auto; border: 1px solid #856f4c; box-sizing: border-box;"></video>
  </div>
  `,
};
const CompTableSet = {
  // v1.1.0
  props: ['prop'],
  template: `
  <table class="rare_list">
    <tr>
      <th>価格</th>
      <td>{{ prop.price }}円</td>
    </tr>
    <tr>
      <th>販売期間</th>
      <td v-html="prop.term"></td>
    </tr>
    <tr>
      <th>購入表示</th>
      <td v-html="prop.setName"></td>
    </tr>
    <tr>
      <th>商品内容</th>
      <td>
        ・魔法石{{ prop.rate }}個<br>
        ・{{ prop.name }}
      </td>
    </tr>
    <tr v-if=" prop.omake !== '' ">
      <th>おまけ</th>
      <td v-html="prop.omake"></td>
    </tr>
  </table>
  `,
};
const CompGachaLineup = {
  props: ['prop'],
  template: `
  <tr>
    <td class="rare">★{{ prop.text }}</td>
    <td v-html="prop.data"></td>
  </tr>
  `,
};
const CompTableGachaLineup = {
  // v1.0.0
  components: {
    'gacha-lineup': CompGachaLineup,
  },
  props: ['prop'],
  template: `
  <table class="rare_list">
    <tr>
      <th colspan="2" class="center" style="padding: 5px 0;">「{{ prop.name }}」ラインナップ</th>
    </tr>
    <template v-for="item in prop.list">
      <gacha-lineup :prop="item"></gacha-lineup>
    </template>
  </table>
  `,
};

let app = new Vue({
  el: '#app',
  data: {
    list: [],
    modalFlg: false,
    state: {
      currentModalImg: null,
    },
    charaNew: charaNew,
    evoNew: evoNew,
    charaNewList: [],
    initCharaList: initCharaList,
    initAbilityList: initAbilityList,
    initEvoList: initEvoList,
    dropList: dropList,
    bgmList: bgmList,
    gacha: gachaList,

    twTag: twTag,
    copyright: copyright,
    copyright2: copyright2,
    mainPath: mainPath,
    eventDate: eventDate,
    dungeonList: dungeonList,
  },
  components: {
    'chara-list': CompCharaList,
    'ability-item': CompAbilityItem,
    'evo-list': CompEvoList,
    'modal-ss': CompModalSS,
    'get-drop': CompDrop,
    'get-bgm': CompBgm,
    'table-set': CompTableSet,
    'table-gacha-lineup': CompTableGachaLineup,
  },
  methods: {
    modalSS: function (e) {
      const imgSrc = $(e.target).attr('src');
      if (this.modalFlg === false) {
        this.state.currentModalImg = imgSrc;
        this.$nextTick(function () {
          $('#modal-ss .modal-content').addClass('active').fadeIn('slow');
          $('#modal-ss .overlay').fadeIn('fast');
          this.modalFlg = true;
        });
      }
    },
    modalClose: function () {
      let _this = this;
      $.when(
        $('.modal-content').fadeOut('fast', function () {
          $(this).removeClass('active');
        }),
        $('.overlay').fadeOut('fast')
      ).done(function () {
        _this.modalFlg = false;
      });
    },
  },
  watch: {
    list: {
      handler: function (newVal, oldVal) {
        let _this = this;
        let listNew = [];
        let listEvoNew = [];
        let getList = newVal.list;
        let checkNewList = this.charaNew;
        let checkNewEvoList = this.evoNew;

        for (let i = 0; i < getList.length; i++) {
          if (checkNewList.includes(getList[i].id)) {
            listNew.push(getList[i]);
          } else if (checkNewEvoList.includes(getList[i].id)) {
            listEvoNew.push(getList[i]);
          }
        }

        _this.charaNewList = [...listNew];
        _this.charaNewEvoList = [...listEvoNew];
      },
    },
  },
  created: function () {
    axios
      .get(mainPath + 'js/list.json')
      .then(
        function (response) {
          this.list = response.data;
        }.bind(this)
      )
      .catch(function (e) {});
  },
});

$(function () {
  if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('iPad') > 0) {
    $('.download_Andr,.download_Kndl').css('display', 'none');
    $('.download_box li').css('margin-right', '0');
  }
  if (navigator.userAgent.indexOf('Silk') > 0 || navigator.userAgent.indexOf('kindle') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    $('.download_ios').css('display', 'none');
  }

  $(window).on('load scroll', function () {
    var page_top = $(window).scrollTop();
    if (page_top >= 500) {
      $('#pagetop').fadeIn(500);
    } else {
      $('#pagetop').fadeOut(500);
    }
  });
});
