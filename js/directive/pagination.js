define([], function () {
    'use strict'
    var dir = ['$compile', function ($compile) {
        return {
            strict: 'EA',
            replace: true,
            templateUrl: '../../template/pagination.html',
            scope: {
                paginationSet: '='
            },
            link:function(scope,ele,attr){
                /* 
                    使用方法示例：
                        ①.标签 <div pagination pagination-set='pageSet'></div>
                        ②.参数 $scope.pageSet = {
                            currentPage:1, // 当前页
                            totalItems:100,
                            totalPage:35, // 总页数
                            eachPageNum:10, // 每页展示数
                            eachPageNumList:[10,20,30], // 可选每页展示数列表
                            pageChange:function(){ // 页码发生变化是调用的函数
                                console.log('页签发生变化');
                            }
                        }
                */
                var inputButtonList = document.querySelectorAll('.pagination input[type="button"]'); // 获取分页组件内所有的input按钮
                var parentUl = document.querySelector('.pagination ul');
                var pageSetLi = parentUl.children; // 获取页签列表
                var eachPageListSelect = document.querySelector('.pagination select');
                var prevTotalPage;
                function setSelectOption(){ // 初始化下拉框
                    for(var i=0;i<scope.paginationSet.eachPageNumList.length;i++){
                        var tempOption = document.createElement('option');
                        tempOption.innerHTML = scope.paginationSet.eachPageNumList[i] + '条/页';
                        tempOption.value = scope.paginationSet.eachPageNumList[i];
                        scope.paginationSet.eachPageNumList[i] == scope.paginationSet.eachPageNum && (tempOption.selected = true);
                        eachPageListSelect.appendChild(tempOption);
                    }
                };
                function notGetNine(){ // 不超过9页时的处理
                    for(var i=0;i<pageSetLi.length;i++){
                        pageSetLi[i].innerHTML = i+1;
                        i > scope.paginationSet.totalPage-1 && (parentUl.removeChild(pageSetLi[i]),i--);
                        scope.paginationSet.currentPage == i + 1 && (pageSetLi[i].className = 'paginationLiActive');
                    }
                    if(scope.paginationSet.totalPage > pageSetLi.length){ // 现有li不够用时
                        for(var j=pageSetLi.length+1;j<scope.paginationSet.totalPage+1;j++){
                            console.log(j);
                            var tempLi = document.createElement('li');
                            tempLi.innerHTML = j;
                            parentUl.appendChild(tempLi);
                            scope.paginationSet.currentPage == j && (pageSetLi[j].className = 'paginationLiActive');
                        }
                    }
                };
                function setActiveLi(){ // 设置激活页签
                    if(scope.paginationSet.totalPage < 9 || (scope.paginationSet.currentPage >= parseInt(pageSetLi[0].innerHTML) && scope.paginationSet.currentPage <= parseInt(pageSetLi[pageSetLi.length-1].innerHTML))){
                        for(var i=0;i<pageSetLi.length;i++){
                            if(parseInt(pageSetLi[i].innerHTML) == scope.paginationSet.currentPage){
                                pageSetLi[i].className = 'paginationLiActive';
                            }else{
                                pageSetLi[i].className = '';
                            }
                        }
                    }else{
                        if(scope.paginationSet.currentPage<5){
                            for(var i=0;i<pageSetLi.length;i++){
                                pageSetLi[i].innerHTML = i+1;
                                pageSetLi[i].className = '';
                                if(parseInt(pageSetLi[i].innerHTML) == scope.paginationSet.currentPage){
                                    pageSetLi[i].className = 'paginationLiActive';
                                }
                            }
                        }else if(scope.paginationSet.currentPage+4>scope.paginationSet.totalPage){
                            for(var i=0;i<pageSetLi.length;i++){
                                pageSetLi[i].innerHTML = scope.paginationSet.totalPage - 8 + i;
                                pageSetLi[i].className = '';
                                if(parseInt(pageSetLi[i].innerHTML) == scope.paginationSet.currentPage){
                                    pageSetLi[i].className = 'paginationLiActive';
                                } 
                            }
                        }else{
                            for(var i=0;i<pageSetLi.length;i++){
                                pageSetLi[i].innerHTML = scope.paginationSet.currentPage - 4 + i;
                                pageSetLi[i].className = '';
                                if(parseInt(pageSetLi[i].innerHTML) == scope.paginationSet.currentPage){
                                    pageSetLi[i].className = 'paginationLiActive';
                                }
                            }
                        }
                    }
                };
                function initPagination(){ // 整个分页组件初始化
                    scope.paginationSet.totalPage = Math.ceil(scope.paginationSet.totalItems/scope.paginationSet.eachPageNum);
                    scope.paginationSet.totalPage < 9 && notGetNine(); // 初始化分页组件
                    if(prevTotalPage < 9 && scope.paginationSet.totalPage > 9){
                      for(var i=pageSetLi.length+1;i<10;i++){
                        var tempLi = document.createElement('li');
                        tempLi.innerHTML = i;
                        parentUl.appendChild(tempLi);
                      }   
                    };
                    document.querySelector('.paginationTotalItems').innerHTML = scope.paginationSet.totalItems;
                    document.querySelector('.paginationTotalPage').innerHTML = scope.paginationSet.totalPage;
                    setClickLi();
                };
                function setClickLi(){ // 给页签添加点击事件
                    for(var i=0;i<pageSetLi.length;i++){ // 页签列表点击事件
                        pageSetLi[i].onclick = function(event){
                            if(parseInt(event.target.innerHTML) != scope.paginationSet.currentPage){
                                for(var j=0;j<event.target.parentElement.children.length;j++){
                                    event.target.parentElement.children[j].className = '';
                                }
                                event.target.className = 'paginationLiActive';
                                scope.paginationSet.currentPage = parseInt(event.target.innerHTML);
                                scope.paginationSet.pageChange();
                            }
                        };
                    };
                }
                inputButtonList[0].onclick = function(event){ // 首页按钮点击事件
                    if(scope.paginationSet.currentPage != 1){
                        scope.paginationSet.currentPage = 1;
                        setActiveLi();
                        scope.paginationSet.pageChange();
                    }  
                };
                inputButtonList[1].onclick = function(event){ // 上一页按钮点击事件
                    if(scope.paginationSet.currentPage > 1){
                        scope.paginationSet.currentPage --;
                        setActiveLi();
                        scope.paginationSet.pageChange();
                    }
                };
                inputButtonList[2].onclick = function(event){ // 下一页按钮点击事件
                    if(scope.paginationSet.currentPage < scope.paginationSet.totalPage){
                        scope.paginationSet.currentPage ++;
                        setActiveLi();
                        scope.paginationSet.pageChange();
                    }
                };
                inputButtonList[3].onclick = function(event){ // 尾页按钮点击事件
                    if(scope.paginationSet.currentPage != scope.paginationSet.totalPage){
                        scope.paginationSet.currentPage = scope.paginationSet.totalPage;
                        setActiveLi();
                        scope.paginationSet.pageChange();
                    }
                };
                inputButtonList[4].onclick = function(event){ // 确认按钮点击事件
                    var goPage = document.querySelector('.paginationGo').value;
                    if(goPage && !isNaN(goPage) && goPage <= scope.paginationSet.totalPage && goPage > 0 && scope.paginationSet.currentPage != parseInt(goPage)){
                        scope.paginationSet.currentPage = parseInt(goPage);
                        setActiveLi();
                        scope.paginationSet.pageChange();
                    }
                };
                eachPageListSelect.onchange = function(event){ // 每页展示条数change事件
                    prevTotalPage = scope.paginationSet.totalPage;
                    scope.paginationSet.eachPageNum = event.target.value;
                    scope.paginationSet.totalPage = Math.ceil(scope.paginationSet.totalItems/scope.paginationSet.eachPageNum);
                    scope.paginationSet.currentPage > scope.paginationSet.totalPage && (scope.paginationSet.currentPage = scope.paginationSet.totalPage);
                    initPagination();
                };
                setSelectOption();
                initPagination();
            }
        }
    }];
    return dir;
})