/*
 * svn是集中式的版本控制系统, 而git是分布式的版本控制系统...所以最好的办法不是谁替代谁...而是他们的协同工作.
 * 
 * 你可以用git svn(注意有的版本并没有git-svn).
 * 
 * 1. 建立本地目录, 比如假定是myproject, 那么就是
 * 
 * $mkdir myproject
 * 
 * $cd myproject
 * 
 * 2. 初始化并获取某个版本
 * 
 * $git svn init http://xxxx <= svn的仓库路径
 * 
 * $git svn fetch -r xxxxx <= 获取某个版本(-r和xxxxx中间有空格哦, 假如不指定版本，它就会根据svn记录一级一级获取了哦)
 * 
 * (update Thu Nov 26 09:45:36 CST 2009)
 * 
 * 以上两步也可以并成一步, 就是
 * 
 * $git svn clone http://xxxx myproject
 * 
 * 然后就是通常的本地操作了...另外,
 * 
 * git svn rebase可以更新本地文件(类似svn update)
 * 
 * git status == svn status
 * 
 * 每次操作，git都会给出相应的提示
 * 
 * git config --global core.whitespace -trailing-space
 * (git智能化到一定程度了，假如你的编程习惯不好，它也会给出警告, 比如这个程序行结尾部分有空格. 你可以设置去掉警告)
 * 
 * 最后假如你要提交，那么就使用
 * 
 * git svn dcommit
 * 
 * kdebase这篇比较不错:http://techbase.kde.org/Development/Tutorials/Git/git-svn
 * 
 * 
 * update on 2011-07-21:
 * 
 * 要忽略某些文件, 需要首先:
 * 
 * git config --global core.excludesfile ~/.gitignore
 * 
 * 然后编辑 vi ~/.gitignore.
 * 
 * 例如: 需要忽略vim的临时文件，就写:
 * 
 * .*.swp
 * 
 */