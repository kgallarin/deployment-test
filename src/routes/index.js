import Vue from 'vue';
import Router from 'vue-router';
import Home from '@components/views/Home';
import Overview from '@components/views/Dashboard';
import StudioModels from '@components/views/StudioModels';
import News from '@components/views/News';
import NewsSingular from '@components/views/NewsSingular';
import Profile from '@components/views/Profile';

//------ CONTENTS START HERE ------ //
import Contents from '@components/views/contents/Contents';
import ContentsOverview from '@components/views/contents/ContentsOverview';

//Content - Photos
import AllPhotoAlbum from '@components/views/contents/ViewAllAlbum';
import SinglePhotosAlbum from '@components/views/contents/SinglePhotosAlbum';
import UploadPicture from '@components/views/contents/UploadPicture';

//Content - VDO
import AllVideoAlbum from '@components/views/contents/ViewAllVideo';
import SingleVideoAlbum from '@components/views/contents/SingleVideoAlbum';
import UploadVdo from '@components/views/contents/UploadVdo';
//------ CONTENTS END HERE ------ //

import EarnMore from '@components/views/EarnMore';

import Referral from '@components/views/Referral';
import Payout from '@components/views/Payout';

//Help & Info page for studios
import Help from '@components/views/Help';
import Question from '@components/partials/help/';
import Answer from '@components/partials/help/Answer';

//Model Dashboard Live show
import Liveshow from '@components/views/Liveshow';
import Privateshow from '@components/views/PrivateShow.vue';
import Cam2Cam from '@components/views/Cam2Cam.vue';
import GroupChat from '@components/views/GroupChat.vue';

import StudioSettings from '@components/views/StudioSettings.vue';
import StudioDashboard from '@components/views/StudioDashboard.vue';

// Messaging components @responsive/routing
import Messaging from '@components/views/Messaging';
import ContactsBar from '@components/common/Messaging/ContactsBar/Default';
import ConversationPanel from '@components/common/Messaging/ConversationPanel';
import Notes from '@components/common/Messaging/Notes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
      meta: {
        layout: 'landing',
      },
    },
    {
      path: '/overview',
      component: Overview,
      name: 'Overview',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/studio-models',
      component: StudioModels,
      name: 'StudioModels',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/news',
      component: News,
      name: 'News',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/news-single',
      component: NewsSingular,
      name: 'NewsSingle',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/profile',
      component: Profile,
      name: 'Profile',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/earn-more',
      component: EarnMore,
      name: 'EarnMore',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/messaging',
      component: Messaging,
      meta: {
        layout: 'dashboard',
      },
      children: [
        {
          path: '',
          component: ContactsBar,
          name: 'Messaging',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'conversation',
          component: ConversationPanel,
          name: 'ConversationPanel',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'message-notes',
          component: Notes,
          name: 'MessageNotes',
          meta: {
            layout: 'dashboard',
          }
        }
      ]
    },
    {
      path: '/contents',
      component: Contents,
      meta: {
        layout: 'dashboard',
      },
      children: [
        {
          path: '',
          component: ContentsOverview,
          name: 'Contents',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'upload-picture',
          component: UploadPicture,
          name: 'UploadPicture',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'upload-video',
          component: UploadVdo,
          name: 'UploadVideo',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'view-all/album',
          component: AllPhotoAlbum,
          name: 'AllPhotoAlbum',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'view-all/video',
          component: AllVideoAlbum,
          name: 'AllVideoAlbum',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'pictures/:id',
          component: SinglePhotosAlbum,
          name: 'SinglePhotosAlbum',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: 'video/:id',
          component: SingleVideoAlbum,
          name: 'SingleVideoAlbum',
          meta: {
            layout: 'dashboard',
          }
        }
      ]
    },
    {
      path: '/payout',
      component: Payout,
      name: 'Payout',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/referral',
      component: Referral,
      name: 'referral',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/help',
      component: Help,
      meta: {
        layout: 'dashboard'
      },
      children: [
        {
          path: '',
          component: Question,
          name: 'Help',
          meta: {
            layout: 'dashboard',
          }
        },
        {
          path: ':id',
          component: Answer,
          name: 'Answer',
          meta: {
            layout: 'dashboard',
          }
        }
      ]
    },
    {
      path: '/liveshow',
      component: Liveshow,
      meta: {
        layout: 'dashboard',
      },
      children: [
        {
          path: '',
          component: Liveshow,
          name: 'liveshow',
          meta: {
            layout: 'liveshow',
          }
        }
      ]
    },
    {
      path: '/private-show',
      component: Privateshow,
      name: 'privateshow',
      meta: {
        layout: 'liveshow',
      }
    },
    {
      path: '/cam2cam',
      component: Cam2Cam,
      name: 'cam2cam',
      meta: {
        layout: 'liveshow',
      }
    },
    {
      path: '/groupchat',
      component: GroupChat,
      name: 'groupchat',
      meta: {
        layout: 'liveshow',
      }
    },
    {
      path: '/studio-settings',
      component: StudioSettings,
      name: 'studio-settings',
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/studio-overview',
      component: StudioDashboard,
      name: 'studio-overview',
      meta: {
        layout: 'dashboard',
      }
    }
    // { path: "*", component: NotFound }
  ],
});

export default router;
