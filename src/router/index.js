import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LeaguesView from "@/views/LeaguesView.vue";
import PlayersView from "@/views/PlayersView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import LeagueView from "@/views/LeagueView.vue";
import StoreView from "@/views/StoreView.vue";
import PlayerView from "@/views/PlayerView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/leagues',
        name: 'leagues',
        component: LeaguesView
    },
    {
        path: '/leagues/:id',
        name: 'league',
        component: LeagueView
    },
    {
        path: '/players',
        name: 'players',
        component: PlayersView
    },
    {
        path: '/players/:id',
        name: 'player',
        component: PlayerView
    },
    {
        path: "/store",
        name: "store",
        component: StoreView
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFoundView
    }
]
});

export default router;