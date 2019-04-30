import ActionType from './Type'
import axios from 'axios'
import { message } from 'antd'

const self = { 
    //获取 banner( 轮播图 ) 数据
    loadBannerFun: () => dispatch => {
        axios.get(`/banner`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadBanner, data: data.banners })
            }
        })
    },
    //获取推荐歌单
    loadPersonalizedFun: () => dispatch => {
        axios.get(`/personalized`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadPersonalized, data: data.result })
            }
        })
    },
    //获取新碟上架列表 
    loadAlbumsFun: () => dispatch => {
        axios.get(`/top/album`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadAlbums, data: data.albums })
            }
        })
    },
    //根据Index获取不同排行榜
    loadTopListFun: (index, onSuccess) => dispatch => {
        axios.get(`/top/list?idx=${index}`)
        .then(data=>{
            if(data.code === 200){
                if(onSuccess){
                    onSuccess(data.playlist)
                    return
                }
                dispatch({ type: ActionType.loadTopListByIndex, data: data.playlist })
                dispatch( self.selectCommentByIdFun(data.playlist.id, 'playlist') )
            }
        })
    },
    //获取所有榜单 
    loadAllTopListFun: () => dispatch => {
        axios.get(`/toplist`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadAllTopList, data: data.list })
            }
        })
    },
    //获取热门歌单分类
    loadPlayListHotFun: () => dispatch => {
        axios.get(`/playlist/hot`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadPlayListHot, data: data.tags })
            }
        })
    },
    //获取歌单分类,包含 category 信息
    loadPlayListCatListFun: () => dispatch => {
        axios.get(`/playlist/catlist`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadPlayListCatList, data: {categories: data.categories, sub: data.sub} })
            }
        })
    },
    //获取网友精选碟歌单
    selectPlaylistFun: (cat, order) => dispatch => {
        var back
        if(cat && order){
            back = axios.get(`/top/playlist?cat=${cat}&order=${order}`)
        }else if(!cat && order){
            back = axios.get(`/top/playlist?order=${order}`)
        }else if(cat && !order){
            back = axios.get(`/top/playlist?cat=${cat}`)
        }else if(!cat && !order){
            back = axios.get(`/top/playlist`)
        }
        back.then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectPlaylist, data: {playlists: data.playlists, cat: data.cat} })
            }
        })
    },
    //获得电台类型
    loadCateListFun: () => dispatch => {
        axios.get(`/dj/catelist`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadCateList, data: data.categories })
            }
        })
    },
    //获取推荐节目
    loadRecommendProgramFun: () => dispatch => {
        axios.get(`/program/recommend`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadRecommendProgram, data: data.programs })
            }
        })
    },
    //获得推荐电台
    loadRecommendDjFun: () => dispatch => {
        axios.get(`/dj/recommend`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadRecommendDj, data: data.djRadios })
            }
        })
    },
    //通过id获得推荐电台
    findRecommendDjByIdFun: (id) => dispatch => {
        axios.get(`/dj/recommend/type?type=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.findRecommendDjById, data: data.djRadios })
            }
        })
    },
    //通过code获取歌手分类列表
    selectArtistByCodeFun: (code, initial) => dispatch => {
        axios.get(`/artist/list?cat=${code}${initial && "&initial=" + initial}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectArtistByCode, data: data.artists })
            }
        })
    },
    //获取热门歌手数据
    loadTopArtistsFun: () => dispatch => {
        axios.get(`/top/artists`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadTopArtists, data: data.artists })
            }
        })
    },
    //获取推荐新音乐
    loadNewSongFun: () => dispatch => {
        axios.get(`/personalized/newsong`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.loadNewSong, data: data.result })
            }
        })
    },
    //获得专辑内容
    selectAlbumByIdFun: (id, onSuccess) => dispatch => {
        axios.get(`/album?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                if(onSuccess){
                    onSuccess(data.songs)
                    return
                }
                dispatch({ type: ActionType.selectAlbumDetailById, data: {album: data.album, songs: data.songs} })
                dispatch( self.selectArtistAlbumFun(data.album.artist.id))
                dispatch( self.selectCommentByIdFun(id, 'album'))
            }
        })
    },
    //获得歌曲详情
    selectSongByIdFun: (id, onSuccess) => dispatch => {
        axios.get(`/song/detail?ids=${id}`)
        .then(data=>{
            if(data.code === 200){
                if(onSuccess){
                    onSuccess(data.songs[0])
                    return
                }
                dispatch({ type: ActionType.selectSongDetailById, data: data.songs[0] })
                dispatch(self.selectLyricsByIdFun(id))
                dispatch(self.selectSimilarPlayListFun(id))
                dispatch(self.selectSimilarSongFun(id))
                dispatch(self.selectCommentByIdFun(id, 'music'))
            }
        })
    },
    //获取歌单详情
    selectSongListByIdFun: (id, onSuccess) => dispatch => {
        axios.get(`/playlist/detail?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                if(onSuccess){
                    onSuccess(data.playlist.tracks)
                    return
                }
                dispatch({ type: ActionType.selectSongListDetailById, data: data.playlist })
                dispatch(self.selectRelatedPlayListFun(id))
                dispatch(self.selectCommentByIdFun(id, 'playlist'))
            }
        })
    },
    //传入歌单 id 可获取相关歌单
    selectRelatedPlayListFun: id => dispatch => {
        axios.get(`/related/playlist?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectRelatedPlayList, data: data.playlists })
            }
        })
    },
    //传入音乐 id 可获得对应音乐的歌词
    selectLyricsByIdFun: id => dispatch => {
        axios.get(`/lyric?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectLyricsById, data: data.lrc || {} })
            }
        })
    },
    //传入音乐 id和type, 可获得该(专辑、歌单、音乐)的所有评论 
    selectCommentByIdFun: (id, type) => dispatch => {
        axios.get(`/comment/${type}?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectCommentById, data: {comments: data.comments, hotComments: data.hotComments, total: data.total} })
            }
        })
    },
    //获取 mv 数据
    selectMvDetailByIdFun: (id, onSuccess) => dispatch => {
        axios.get(`/mv/detail?mvid=${id}`)
        .then(data=>{
            if(data.code === 200){
                onSuccess && onSuccess(data.data)
                dispatch({ type: ActionType.selectMvDetailById, data: data.data })
                dispatch(self.selectMvUrlByIdFun(id))
                dispatch(self.selectCommentByIdFun(id, 'mv'))
                dispatch(self.selectSimilarMvByIdFun(id))
            }
        })
    },
    //获取 mv 播放地址
    selectMvUrlByIdFun: id => dispatch => {
        axios.get(`/mv/url?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectMvUrlById, data: data.data })
            }
        })
    },
    //获取相似 mv
    selectSimilarMvByIdFun: id => dispatch => {
        axios.get(`/simi/mv?mvid=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectSimilarMvById, data: data.mvs })
            }
        })
    },
    //获得歌手专辑内容
    selectArtistAlbumFun: id => dispatch => {
        axios.get(`/artist/album?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectArtistAlbum, data: data.hotAlbums })
            }
        })
    },
    //获得相似歌单
    selectSimilarPlayListFun: id => dispatch => {
        axios.get(`/simi/playlist?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectSimilarPlayList, data: data.playlists})
            }
        })
    },
    //获得相似歌曲
    selectSimilarSongFun: id => dispatch => {
        axios.get(`/simi/song?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectSimilarSong, data: data.songs})
            }
        })
    }, 
    //传入歌手 id, 可获得歌手部分信息和热门歌曲
    selectArtistsByIdFun: id => dispatch => {
        axios.get(`/artists?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectArtistsById, data: { artist: data.artist, hotSongs: data.hotSongs}})
            }
        })
    },
    //传入歌手 id, 可获得歌手 mv 信息
    selectArtistMvsFun: id => dispatch => {
        axios.get(`/artist/mv?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectArtistMvs, data: data.mvs})
            }
        })
    },
    //传入歌手 id, 可获得歌手描述
    selectArtistdescFun: id => dispatch => {
        axios.get(`/artist/desc?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectArtistdesc, data: { briefDesc: data.briefDesc, introduction: data.introduction, topicData: data.topicData }})
            }
        })
    },
    //传入rid, 可获得对应电台的详情介绍
    selectRadioByIdFun: id => dispatch => {
        axios.get(`/dj/detail?rid=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectRadioById, data: data.djRadio })
                dispatch(self.selectDjProgramByIdFun(id))
            }
        })
    },
    //传入rid, 可查看对应电台的电台节目以及对应的 id
    selectDjProgramByIdFun: (id, onSuccess) => dispatch => {
        axios.get(`/dj/program?rid=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectDjProgramById, data: data.programs })
                onSuccess && onSuccess(data.programs)
            }
        })
    }, 
    //电台节目排序
    sortDjProgramsFun: type => dispatch =>{
        dispatch({ type: ActionType.sortDjPrograms, data: type })
    },
    //传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url
    selectSongUrlByIdFun: id => (dispatch, getState) =>{
        const {playingSong, programDetail} = getState().findMusic
        axios.get(`/song/url?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectSongUrlById, data: data.data })
                JSON.stringify(playingSong) === '{}' || playingSong.id !== id ? 
                axios.get(`/song/detail?ids=${id}`)
                .then(data=>{
                    if(data.code === 200){
                        dispatch({ 
                            type: ActionType.pushSelectSong,
                            data: data.songs[0].djId == 0 ? data.songs[0] : {...data.songs[0], name: programDetail.name, ar: [{name: programDetail.radio.name, id: programDetail.radio.id}], pic: programDetail.blurCoverUrl}
                        })
                        dispatch(self.selectLyricsByIdFun(id))
                    }
                }) : ''
            }
        })
    },
    //播放播放列表的歌曲
    playListPlayFun: s => (dispatch, getState) =>{
        const { djPrograms } = getState().findMusic
        axios.get(`/song/url?id=${s.id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectSongUrlById, data: data.data })
                dispatch({ type: ActionType.pushSelectSong, data: s })
                dispatch(self.selectLyricsByIdFun(s.id))
            }
        })
    },
    //将歌单的歌曲放入播放列表中并播放
    pushPlayListFun: list => dispatch =>{
        const id = list[0].id
        axios.get(`/song/url?id=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.selectSongUrlById, data: data.data })
                dispatch({ type: ActionType.pushPlayList, data: list })
                dispatch(self.selectLyricsByIdFun(id))
            }
        })
    },
    //将歌曲放入播放列表中
    addPlayListFun: song => (dispatch, getState) =>{
        dispatch({ type: ActionType.addPlayList, data: song })
    },
    //上一首歌或下一首歌（播放列表）
    preOrNextSongFun: data => dispatch =>{
        dispatch({ type: ActionType.selectSongDetailById, data })
    },
    //清除播放列表或删除播放列表的一首歌
    removeSongFun: id => dispatch =>{
        dispatch({ type: ActionType.removeSong, data: id })
    },
    //电台全部节目播放
    pushProgramsFun: ids => (dispatch, getState) =>{
        const {djPrograms} = getState().findMusic 
        axios.get(`/song/url?id=${ids[0]}`)
        .then(data=>{
            if(data.code ===200){
                dispatch({ type: ActionType.selectSongUrlById, data: data.data })
                axios.get(`/song/detail?ids=${ids}`)
                .then(data=>{
                    if(data.code === 200){
                        const newData = data.songs.map(d=>({
                            ...d,
                            name: d.name ? d.name : djPrograms.filter(p=>p.mainTrackId == d.id)[0].name,
                            ar: d.ar.name ? d.ar : [{
                                id: djPrograms.filter(p=>p.mainTrackId == d.id)[0].radio.id,
                                name: djPrograms.filter(p=>p.mainTrackId == d.id)[0].radio.name
                            }],
                            pic: djPrograms.filter(p=>p.mainTrackId == d.id)[0].blurCoverUrl
                        }))
                        dispatch({ type: ActionType.pushPlayList, data: newData })
                        dispatch(self.selectLyricsByIdFun(ids[0]))
                    }
                })
            }
        })
    },
    //电台节目添加到播放列表
    addProgramsFun: id => (dispatch, getState) =>{
        const {djPrograms} = getState().findMusic
        axios.get(`/song/detail?ids=${id}`)
        .then(data=>{
            if(data.code === 200){
                const newData = {
                    ...data.songs[0],
                    name: data.songs[0].name ? data.songs[0].name : djPrograms.filter(p=>p.mainTrackId == data.songs[0].id)[0].name,
                    ar: data.songs[0].ar.name ? data.songs[0].ar : [{
                        id: djPrograms.filter(p=>p.mainTrackId == data.songs[0].id)[0].radio.id,
                        name: djPrograms.filter(p=>p.mainTrackId == data.songs[0].id)[0].radio.name
                    }],
                    pic: djPrograms.filter(p=>p.mainTrackId == data.songs[0].id)[0].blurCoverUrl
                }
                dispatch({ type: ActionType.addPlayList, data: newData })
            }
        })
    },
    //电台节目详情信息
    addProgramDetailFun: data => dispatch =>{
        dispatch({ type: ActionType.addProgramDetail, data })
    },
    //获取用户详情
    getUserDetailFun: id => dispatch =>{
        axios.get(`/user/detail?uid=${id}`)
        .then(data=>{
            if(data.code === 200){
                dispatch({ type: ActionType.getUserDetail, data })
            }
        })
    },
    //接口测试
    loading: () => dispatch => {
        axios.get(`/user/record?uid=198554&type=0`)
        .then(data=>{
            if(data.code === 200){
                console.log('测试接口',data)
            }
        })
    },
}
export default self