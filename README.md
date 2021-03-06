adaptTo() 2020 - Use Cloud Manager to deploy CONGA-based AEM Applications
=========================================================================

Demo code for talk at adaptTo() 2020:<br/>
https://adapt.to/2020/en/schedule/use-cloud-manager-to-deploy-conga-based-aem-applications.html

---

This is an AEM project set up with the [wcm.io Maven Archetype for AEM][wcmio-maven-archetype-aem].


### Build and deploy

To build the application run

```
mvn clean install
```

To build and deploy the application to your local AEM instance use these scripts:

* `build-deploy.sh` - Build and deploy to author instance
* `build-deploy-publish.sh` - Build and deploy to publish instance

The first deployment may take a while until all updated OSGi bundles are installed.

After deployment you can open the sample content page in your browser:

* Author: http://localhost:4502/editor.html/content/adaptto-cloud-demo/en.html
* Publish: http://localhost:4503/content/adaptto-cloud-demo/en.html

You can deploy individual bundles or content packages to the local AEM instances by using:

* `mvn -Pfast cq:install` - Install and deploy bundle or content package to author instance
* `mvn -Pfast,publish cq:install` - Install and deploy bundle or content package to publish instance

### System requirements

* JDK 1.8
* Apache Maven 3.6.0 or higher
* AEM cloud author instance running on port 4502
* Optional: AEM cloud publish instance running on port 4503
* Include the [Adobe Public Maven Repository][adobe-public-maven-repo] in your maven settings, see [wcm.io Maven Repositories][wcmio-maven] for details.
* To obtain the latest service packs via Maven you have to upload them manually to your Maven Artifact Manager following [these conventions][aem-binaries-conventions] for naming them.

It is recommended to set up the local AEM instances with `nosamplecontent` run mode.


### Project overview

Modules of this project:

* [parent](parent/): Parent POM with dependency management for the whole project. All 3rdparty artifact versions used in the project are defined here.
* [frontend](frontend/): Frontend build project with webpack
* [bundles/core](bundles/core/): OSGi bundle with Java classes (e.g. Sling Models, Servlets, business logic).
* [content-packages/ui.apps](content-packages/ui.apps/): AEM content package containing:
  * AEM components with their scripts and dialog definitions
  * HTML client libraries with JavaScript and CSS
  * i18n
* [content-packages/apps-repository-structure](content-packages/apps-repository-structure/): AEM content package defining root paths for application package validation
* [content-packages/complete](content-packages/complete/): AEM content package containing all OSGi bundles of the application and their dependencies
* [content-packages/conf-content](content-packages/conf-content/): AEM content package with editable templates stored at `/conf`
* [content-packages/sample-content](content-packages/sample-content/): AEM content package containing sample content (for development and test purposes)
* [config-definition](config-definition/): Defines the CONGA roles and templates for this application. Also contains a `development` CONGA environment for deploying to local development instances.


[wcmio-maven-archetype-aem]: https://wcm.io/tooling/maven/archetypes/aem/
[adobe-public-maven-repo]: https://repo.adobe.com/nexus/content/groups/public/
[wcmio-maven]: https://wcm.io/maven.html



### Parameters used to setup this project

```
mvn archetype:generate -DinteractiveMode=false \
  -DarchetypeGroupId=io.wcm.maven.archetypes \
  -DarchetypeArtifactId=io.wcm.maven.archetypes.aem \
  -DarchetypeVersion=3.2.6 \
  -DprojectName=adaptto-cloud-demo \
  -DgroupId=to.adapt2020 \
  -DartifactId=to.adapt2020.clouddemo \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=to.adapt2020.clouddemo \
  -DpackageGroupName=adaptto-demo \
  -DaemAuthorPort=4502 \
  -DaemPublishPort=4503 \
  -DoptionJavaVersion=8 \
  -DoptionAemVersion=cloud \
  -DoptionAemServicePack=n \
  -DoptionSlingModelsLatest=n \
  -DoptionSlingInitialContentBundle=n \
  -DoptionEditableTemplates=y \
  -DoptionMultiBundleLayout=n \
  -DoptionContextAwareConfig=y \
  -DoptionWcmioHandler=y \
  -DoptionAcsCommons=n \
  -DoptionFrontend=y \
  -DoptionNodeJsPlugin=n \
  -DoptionIntegrationTests=n
```
