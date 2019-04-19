import ActionType from './Type'

const initialState = {
    banners: [],
    personalized: [],
    albums: [],
    topList: [],
    listInfo: {},
    hotCatList: [],
    catList: {},
    playList: {},
    cateList: [],
    programs: [],
    djRadios: [],
    selectedRadios: [],
    artists: [],
    HotArtists: [],
    NewSong: [],
    albumDetail: {},
    songDetail: {},
    songListDetail: {},
    lyrics: {},
    comment: {},
    mvDetail: {},
    mvUrl: {},
    similarMv: [],
    artistAlbum: [],
    similarList: [],
    similarSongs: [],
    artistDetail: {},
    artistMvs: [],
    artistDesc: {},
    relatedPlayList: [],
    radioDetail: {},
    djPrograms: [],
    songUrl: [],
    playingSong: {},
    playSongs: []
}

const getNewState = function(state, action){
    switch(action.type){
        case ActionType.loadBanner:
            return {
                banners: action.data
            }
        case ActionType.loadPersonalized:
            return {
                personalized: action.data
            }
        case ActionType.loadAlbums:
            return {
                albums: action.data
            }
        case ActionType.loadTopListByIndex:
            return {
                listInfo: action.data
            }
        case ActionType.loadAllTopList:
            return {
                topList: action.data
            }
        case ActionType.loadPlayListHot:
            return {
                hotCatList: action.data
            }
        case ActionType.loadPlayListCatList:
            return {
                catList: action.data
            }
        case ActionType.selectPlaylist:
            return {
                playList: action.data
            }
        case ActionType.loadCateList:
            return {
                cateList: action.data
            }
        case ActionType.loadRecommendProgram:
            return {
                programs: action.data
            }
        case ActionType.loadRecommendDj:
            return {
                djRadios: action.data
            }
        case ActionType.findRecommendDjById:
            return {
                selectedRadios: action.data
            }
        case ActionType.selectArtistByCode:
            return {
                artists: action.data
            }
        case ActionType.loadTopArtists:
            return {
                HotArtists: action.data
            }
        case ActionType.loadNewSong:
            return {
                NewSong: action.data
            }
        case ActionType.selectAlbumDetailById:
            return {
                albumDetail: action.data
            }
        case ActionType.selectSongDetailById:
            return {
                songDetail: action.data
            }
        case ActionType.selectSongListDetailById:
            return {
                songListDetail: action.data
            }
        case ActionType.selectLyricsById:
            return {
                lyrics: action.data
            }
        case ActionType.selectCommentById:
            return {
                comment: action.data
            }
        case ActionType.selectMvDetailById:
            return {
                mvDetail: action.data
            }
        case ActionType.selectMvUrlById:
            return {
                mvUrl: action.data
            }
        case ActionType.selectSimilarMvById:
            return {
                similarMv: action.data
            }
        case ActionType.selectArtistAlbum:
            return {
                artistAlbum: action.data
            }
        case ActionType.selectSimilarPlayList:
            return {
                similarList: action.data
            }
        case ActionType.selectSimilarSong:
            return {
                similarSongs: action.data
            }
        case ActionType.selectArtistsById:
            return {
                artistDetail: action.data
            }
        case ActionType.selectArtistMvs:
            return {
                artistMvs: action.data
            }
        case ActionType.selectArtistdesc:
            return {
                artistDesc: action.data
            }
        case ActionType.selectRelatedPlayList:
            return {
                relatedPlayList: action.data
            }
        case ActionType.selectRadioById:
            return {
                radioDetail: action.data
            }
        case ActionType.selectDjProgramById:
            return {
                djPrograms: action.data
            }
        case ActionType.sortDjPrograms:
            return {
                djPrograms: !action.data ? state.djPrograms : state.djPrograms.reverse()
            }
        case ActionType.selectSongUrlById:
            return {
                songUrl: action.data
            }
        case ActionType.pushSelectSong:
            return {
                playingSong: action.data,
                playSongs: state.playSongs.some(s=> s.id === action.data.id) ? state.playSongs : [...state.playSongs, action.data]
            }
        case ActionType.removeSong:
            return {
                playSongs: action.data ? state.playSongs.filter(s=>s.id !== action.data) : []
            }
        case ActionType.pushPlayList:
            return {
                playingSong: action.data[0],
                playSongs: action.data
            }
        case ActionType.addPlayList:
            return {
                playSongs: state.playSongs.some(s=> s.id === action.data.id) ? state.playSongs : [...state.playSongs, action.data]
            }
    }
}

export default {
    initialState,
    getNewState
}