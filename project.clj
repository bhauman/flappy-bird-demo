(defproject flappy-bird-demo "0.1.1-SNAPSHOT"
  :description "The original figwheel flappybird demo"
  
  :url "http://rigsomelight.com/2014/05/01/interactive-programming-flappy-bird-clojurescript.html"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.371"]
                 [cljsjs/react "0.13.3-1"]
                 [sablono "0.4.0"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.5.4-7"]]

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/flappy_bird_demo.js"
                                    :target-path]  
  
  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "flappy-bird-demo"
              :source-paths ["src"]
              :figwheel true
              :compiler {
                         :main flappy-bird-demo.core
                         :asset-path "js/out"
                         :output-to "resources/public/js/flappy_bird_demo.js"
                         :output-dir "resources/public/js/out"
                         :source-map-timestamp true}}]}
  
  :figwheel { :css-dirs ["resources/public/css"]
              :open-file-command "emacsclient"
             })
